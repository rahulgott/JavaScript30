window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

  const speech = new SpeechRecognition()
  speech.interimResults = true
  speech.lang = 'en-US'
  
  let p = document.createElement('p')
  const words = document.querySelector('.words')
  words.appendChild(p)

  speech.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')

    p.textContent = transcript

    if (e.results[0].isFinal) {
        p = document.createElement('p')
        words.appendChild(p)
    }
  })

  speech.addEventListener('end', speech.start)


  speech.start()