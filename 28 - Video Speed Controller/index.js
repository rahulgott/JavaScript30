const video = document.querySelector('video')
const speed = document.querySelector('.speed')
const bar = speed.querySelector('.speed-bar')
let isDown = false

speed.addEventListener('mousedown', () => isDown = true)
speed.addEventListener('mouseup', () => isDown = false)
speed.addEventListener('mousemove', handleEvent)

function handleEvent(e) {
    if(!isDown) return 
    const height = e.pageY - this.offsetTop
    percent = height / this.offsetHeight
    const min = 0.4
    const max = 4
    const moved = Math.round(percent * 100) + '%'
    const playbackRate = percent * (max - min) + min 
    bar.style.height = moved
    bar.textContent = playbackRate.toFixed(2) + 'x'
    video.playbackRate = playbackRate

    console.log(percent)
}