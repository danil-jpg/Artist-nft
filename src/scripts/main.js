import Swiper from 'swiper'

import burger from './modules/burger.js'
import lending from './modules/lending.js'
import admin from './modules/admin.js'

window.addEventListener('DOMContentLoaded', () => {
  const lendingPage = document.querySelector('#lendingMain')
  const adminPage = document.querySelector('.adminPage')

  if (lendingPage) {
    burger()
    lending()
  }

  if (adminPage) {
    admin()
  }
})
