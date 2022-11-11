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
    slidesPerView: 4.6,

    breakpoints: {
      374: {
        slidesPerView: 4.6
      },
      320: {
        slidesPerView: 3
      }
    }
  })

  function tabs () {
    const triggers = document.querySelectorAll('.module__tab-trigger-wr')
    const tabBlocks = document.querySelectorAll('.module__content>*:not(.module__left-wr)')
    const triggersText = document.querySelectorAll('.module__tab-text')
    const triggersImg = document.querySelectorAll('.module__tab-trigger-wr img')

    triggers.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        triggersText.forEach(item => {
          item.classList.remove('module__tab-text_chosen')
        })

        tabBlocks.forEach(item => {
          item.style.display = 'none'
        })
        triggersImg.forEach((item, index) => {
          if (index === 0) {
            item.setAttribute('src', 'img/Owner/messages-default.svg')
          }
          if (index === 1) {
            item.setAttribute('src', 'img/Owner/orders-icon.svg')
          }
          if (index === 2) {
            item.setAttribute('src', 'img/Owner/nft-orders-icon.svg')
          }
          if (index === 3) {
            item.setAttribute('src', 'img/Owner/workers-icon.svg')
          }
        })

        triggersText[index].classList.add('module__tab-text_chosen')
        tabBlocks[index].style.display = 'grid'

        if (index === 0) {
          triggersImg[index].setAttribute('src', 'img/Owner/message-icon-active.webp')
        }
        if (index === 1) {
          triggersImg[index].setAttribute('src', 'img/Owner/order-active.svg')
        }
        if (index === 2) {
          if (item.classList.contains('module__spec-spec') === false) {
            triggersImg[index].setAttribute('src', 'img/Owner/nft-order-active.svg')
          }
        }
        if (index === 3) {
          triggersImg[index].setAttribute('src', 'img/Owner/workers-active.svg')
        }
        console.log()
      })
    })
  }

  tabs()
}
export default messager
