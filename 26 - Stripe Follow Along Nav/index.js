const triggers = document.querySelectorAll('.cool > li')
const bg = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')

triggers.forEach(link => link.addEventListener('mouseenter', handleEnter))
triggers.forEach(link => link.addEventListener('mouseleave', handleLeave))

function handleEnter() {
    this.classList.add('trigger-enter')
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150)
    bg.classList.add('open')

    const dropdown = this.querySelector('.dropdown')
    const dropDownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropDownCoords.height,
        width: dropDownCoords.width,
        top: dropDownCoords.top - navCoords.top,
        left: dropDownCoords.left - navCoords.left
    }

    bg.style.setProperty('width', `${coords.width}px`)
    bg.style.setProperty('height', `${coords.height}px`)
    bg.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    bg.classList.remove('open');
}
