const nav = document.querySelector('#main')
let topOfNav = nav.offsetTop

window.addEventListener('scroll', fixNav)

function fixNav() {
    console.log(nav.offsetTop, window.scrollY)
    if(topOfNav < window.scrollY) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        nav.classList.add('fix-nav')
    }
    else {
        document.body.style.paddingTop = 0
        nav.classList.remove('fix-nav')
    }
}

