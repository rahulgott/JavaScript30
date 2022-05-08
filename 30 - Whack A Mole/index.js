const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole
let timeUp = false
let score = 0

moles.forEach(mole => mole.addEventListener('click', bonk));

function startGame() {
    scoreBoard.textContent = 0
    score = 0
    timeUp = false
    peek()
    setTimeout(() => timeUp = true, 10000);
}

function randTime(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function randHole(holes) {
    const id = Math.floor(Math.random() * holes.length)
    const hole = holes[id]
    if(hole === lastHole) {
        return randHole(holes)
    }
    lastHole = hole
    return hole
}

function peek() {
    const time = randTime(200, 1000)
    const hole = randHole(holes)
    hole.classList.add('up')
    setTimeout(() => {
        hole.classList.remove('up') 
        if(!timeUp) peek()
    }, time);
}

function bonk(e) {
    console.log(this)
    if(!e.isTrusted) return
    score++
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}
