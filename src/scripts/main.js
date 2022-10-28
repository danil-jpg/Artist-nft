import burger from './modules/burger.js'

window.addEventListener('DOMContentLoaded', () => {
  const lendingPage = document.querySelector('#burgerPage')

  if (lendingPage) {
    burger()
  }

})
