import Swiper from 'swiper'

function messager () {
  const menuTrigger = document.querySelector('.module-header__burger-wr')
  const menu = document.querySelector('.module__left-wr')
  const elemToBlur = document.querySelectorAll('.module__content>*:not(.module__left-wr)')
  const triggersForChat = document.querySelectorAll('.chat-list__user-wr')
  const chatBlock = document.querySelector('.chat')
  const returnBtn = document.querySelector('.chat__top-mobile-wr img')

  triggersForChat.forEach(item => {
    item.addEventListener('click', () => {
      chatBlock.classList.toggle('active')
    })
  })

  menuTrigger.addEventListener('click', () => {
    menu.classList.toggle('active')
    elemToBlur.forEach(item => {
      item.classList.toggle('elemToBlue')
    })
  })

  returnBtn.addEventListener('click', () => {
    chatBlock.classList.toggle('active')
  })

  const swiperBlock = new Swiper('.swiper', {
    spaceBetween: 28,
    slidesPerView: 4.6
  })
}
export default messager
