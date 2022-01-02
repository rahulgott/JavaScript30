function removeTransition(e) {
    if(e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
}

function playSound(e) {
    const audio = document.querySelector(`audio[id="${e.key}"]`);
    const key = document.querySelector(`div[id="${e.key}"]`);
    if(!audio) return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound)