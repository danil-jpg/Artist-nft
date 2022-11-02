function burger () {
    const burgerClick = document.querySelector('.header-burger')
    const burgerClose = document.querySelector('.header-burger__menu')
    const burgerList = document.querySelector('.header-menu__list')

    burgerClick.addEventListener('click', () => {
        burgerList.classList.toggle('active')
    })
    burgerClose.addEventListener('click', () => {
        burgerList.classList.toggle('active')
    })
}

export default burger