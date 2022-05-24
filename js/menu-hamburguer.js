const menuHamburguer = document.querySelector('#mobile-menu')
const menuOptions = document.querySelector('#menu-options')
const modalBackground = document.querySelector('#modal-bg')

const showMenu = () => {
    menuOptions.classList.toggle('show')
    modalBackground.classList.toggle('show')
}

let menuOpen = false

const toggleHamburguer = () => {
    if(!menuOpen){
        menuHamburguer.classList.add('open')
        menuOpen = true
    } else {
        menuHamburguer.classList.remove('open')
        menuOpen = false
    }
}

function handleClick() {
    showMenu()
    toggleHamburguer()
}

menuHamburguer.addEventListener('click', () => handleClick())