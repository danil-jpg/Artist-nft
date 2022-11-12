import Swiper from 'swiper'

import burger from './modules/burger.js'
import lending from './modules/lending.js'
import auction from './modules/auction.js'
import pricing from './modules/pricing.js'
import payment from './modules/payment.js'
import forum from './modules/forum.js'
import admin from './modules/admin.js'
import messager from './modules/messager.js'

window.addEventListener('DOMContentLoaded', () => {
  const lendingPage = document.querySelector('#lendingMain')
  const adminPage = document.querySelector('.adminPage')
  const auctionPage = document.querySelector('#auctionPage')
  const pricingPage = document.querySelector('#pricingPage')
  const paymentPage = document.querySelector('#paymentPage')
  const forumPage = document.querySelector('#forumPage')
  const ownerPage = document.querySelector('.OwnerHTML')
  const customerPage = document.querySelector('.CustomerHTML')
  const workersPage = document.querySelector('.WorkerHTML')

  if (lendingPage) {
    burger()
    lending()
  }
  if (auctionPage) {
    burger()
    auction()
  }
  if (pricingPage) {
    burger()
    pricing()
  }
  if (paymentPage) {
    burger()
    payment()
  }
  if (forumPage) {
    burger()
    forum()
  }
  if (adminPage) {
    admin()
  }
  if (workersPage) {
    messager(false, false, true)
  }
  if (customerPage) {
    messager(false, true)
  }
  if (ownerPage) {
    messager(true)
  }
})
