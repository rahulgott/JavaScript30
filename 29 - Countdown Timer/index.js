let countDown
const timeLeft = document.querySelector('.display__time-left')
const timeEnd = document.querySelector('.display__end-time')
const input = document.querySelector('#custom')
const buttons = document.querySelectorAll('[data-time]')

buttons.forEach(button => button.addEventListener('click', startTimer));
input.addEventListener('submit', function(e) {
    e.preventDefault()
    const mins = this.minutes.value
    timer(mins * 60)
    this.reset()
})

function timer(seconds) {
    clearInterval(countDown)
    const now = Date.now()
    const then = now + seconds * 1000
    displayTimeLeft(seconds)
    displayEndTime(then)
    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000)

        if(secondsLeft < 0) {
            clearInterval(countDown)
            return
        }
        // console.log(secondsLeft)
        displayTimeLeft(secondsLeft)
    }, 1000);
    
    // console.log(now)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remSeconds = seconds % 60 
    // console.log(minutes, remSeconds)
    const display = `${minutes}:${remSeconds < 10 ? '0' : ''}${remSeconds}`
    document.title = display
    timeLeft.textContent = display
}

function displayEndTime(timeStamp) { 
    const end = new Date(timeStamp)
    const hours = end.getHours()
    const minutes = end.getMinutes()
    timeEnd.textContent = `Be back by ${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? '0' : ''}${minutes} ${hours >= 12 ? 'p.m' : 'a.m'}`
}

function startTimer() {
    const interval = parseInt(this.dataset.time)
    timer(interval)
}