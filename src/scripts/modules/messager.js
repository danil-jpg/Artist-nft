function messager () {
  console.log(1)
  const menuTrigger = document.querySelector('.module-header__burger-wr')
  const menu = document.querySelector('.module__left-wr')

  menuTrigger.addEventListener('click', () => {
    menu.classList.toggle('active')
  })
}

export default messager
