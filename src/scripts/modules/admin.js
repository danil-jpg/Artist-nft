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
}

export default admin
