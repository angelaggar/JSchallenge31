// ////////// Tomar elementos del DOM
const inputEmail = document.getElementById('inputEmail')
const inputPassword = document.getElementById('inputPassword')
const Check1 = document.getElementById('Check1')
const loginButton = document.getElementById('loginButtonForm')
const loginbox = document.getElementById('buttonContainer')

const avatar = document.getElementById('avatar')

// //////////////Acceder a la base de datos de usuarios en local storage
const inputEmail = document.getElementById('inputEmail')
const inputPassword = document.getElementById('inputPassword')
const loginButton = document.getElementById('loginButton')
const loginbox = document.getElementById('loginbox')
const avatar = document.getElementById('avatar')
let statusLoged = false // Necesitas definir statusLoged

const logIn = () => {
  const emailValue = inputEmail.value.trim()
  const passwordValue = inputPassword.value.trim()
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: emailValue,
      password: passwordValue,
      expiresInMins: 30 // optional, defaults to 60
    })
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          'Credenciales inválidas. Por favor, verifica tus datos.'
        )
      }
      return res.json()
    })
    .then((json) => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          id: json.id,
          firstName: json.firstName,
          picture: json.picture
        })
      )
      localStorage.setItem('token', json.token)
      statusLoged = true
      window.location.href = '/index.html'
    })
    .catch((error) => {
      console.error('Error en la autenticación:', error)
      alert(error.message)
    })
}

const currentPage = window.location.pathname

if (currentPage.includes('/loginForm.html')) {
  loginButton.addEventListener('click', logIn)

  inputPassword.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      logIn()
    }
  })
}

if (currentPage.includes('/index.html') && statusLoged === true) {
  const user = JSON.parse(localStorage.getItem('user'))
  loginbox.classList.add('d-flex', 'd-none')
  avatar.setAttribute('src', user.picture)
}
