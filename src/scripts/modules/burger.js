// import { active } from "browser-sync"

function burger () {
    let burgerClick = document.querySelector('.header-burger')
    let burgerClose = document.querySelector('.header-burger__menu')
    let burgerList = document.querySelector('.header-menu__list')

    burgerClick.addEventListener('click', () => {
        burgerList.classList.toggle('active')
    })
    burgerClose.addEventListener('click', () => {
        burgerList.classList.toggle('active')
    })
}

export default burger