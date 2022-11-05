import Swiper from 'swiper'

import burger from './modules/burger.js'
import lending from './modules/lending.js'
import auction from './modules/auction.js'
import admin from './modules/admin.js'

window.addEventListener('DOMContentLoaded', () => {
  const lendingPage = document.querySelector('#lendingMain')
  const adminPage = document.querySelector('.adminPage')
  const auctionPage = document.querySelector('#auctionPage')
  if (lendingPage) {
    burger()
    lending()
  }
  if (auctionPage){
    burger()
    lending()
    auction()
  }
  if (adminPage) {
    admin()
  }
})
