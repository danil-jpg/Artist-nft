function admin () {
  const logInBtn = document.querySelector('.admin__log-in')
  const signInBtn = document.querySelector('.admin__sign-in')
  const signInBottomBtn = document.querySelector('.admin__bottom-hint *')
  const logInBottomBtn = document.querySelector('#log-in_bottom')

  const radioContainer = document.querySelector('.admin__sing-in-togglers')
  const adminTextToChange = document.querySelector('.admin__bottom-hint')

  const adminHTML = document.querySelector('.adminPage')

  logInBtn.addEventListener('click', toggleBtns)
  signInBtn.addEventListener('click', toggleBtns)
  signInBottomBtn.addEventListener('click', toggleBtns)
  logInBottomBtn.addEventListener('click', toggleBtns)

  function toggleBtns () {
    logInBtn.classList.toggle('admin__checked')
    signInBtn.classList.toggle('admin__checked')

    if (signInBtn.classList.contains('admin__checked')) {
      radioContainer.style.display = 'block'
      adminHTML.classList.toggle('adminPageSingIn')
      //   adminTextToChange.innerHTML = 'Already have accoun? <span>Log in</span>'
    } else {
      radioContainer.style.display = 'none'
      adminHTML.classList.toggle('adminPageSingIn')
      //   adminTextToChange.innerHTML = 'Don’t have account yet? <span>Sign up</span>'
    }
  }

  const customerCheck = document.querySelector('#Customer')
  const adminCheck = document.querySelector('#Admin')
  const workersCheck = document.querySelector('#Workers')
  const hrefToChange = document.querySelector('.hrefToChange')
  const labelBlock = document.querySelector('.admin__labels-wr')

  labelBlock.addEventListener('click', () => {
    if (customerCheck.checked) {
      hrefToChange.setAttribute('href', 'customer.html')
    }
    if (adminCheck.checked) {
      hrefToChange.setAttribute('href', 'Owner.html')
    }
    if (workersCheck.checked) {
      hrefToChange.setAttribute('href', 'worker.html')
    }
  })
}

export default admin
