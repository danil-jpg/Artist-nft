import Swiper from 'swiper'

import burger from './modules/burger.js'
import lending from './modules/lending.js'
import admin from './modules/admin.js'
import messager from './modules/messager.js'

window.addEventListener('DOMContentLoaded', () => {
  const lendingPage = document.querySelector('#lendingMain')
  const adminPage = document.querySelector('.adminPage')
  const messagerPage = document.querySelector('.MessagerHTML')

  if (lendingPage) {
    burger()
    lending()
  }

  if (adminPage) {
    admin()
  }

  if (messagerPage) {
    messager()
  }
})
