import Swiper from 'swiper';

import burger from './modules/burger.js'
import lending from './modules/lending.js'

window.addEventListener('DOMContentLoaded', () => {
  const lendingPage = document.querySelector('#lendingMain')
  if (lendingPage) {
    burger()
    lending()
  }

})
