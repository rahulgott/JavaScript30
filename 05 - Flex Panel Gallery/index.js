const panel = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
}

function toggleTextDrop(e){
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
}

panel.forEach(pane => pane.addEventListener('click', toggleOpen))
panel.forEach(pane => pane.addEventListener('transitionend', toggleTextDrop))