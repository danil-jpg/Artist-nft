import Swiper from 'swiper'

function messager () {
  const menuTrigger = document.querySelector('.module-header__burger-wr')
  const menu = document.querySelector('.module__left-wr')

  menuTrigger.addEventListener('click', () => {
    menu.classList.toggle('active')
  })

  const swiperBlock = new Swiper('.swiper', {
    spaceBetween: 28,
    slidesPerView: 4.6
  })
}
export default messager
