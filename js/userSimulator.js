// /////////////////////ESTA FUNCION CREA UN UNICO USUARIO PARA EL EJEMPLO
const user = {
  id: '' + Math.random().toString(9).slice(3, 9),
  name: 'Alejandra Orozco',
  avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
  comment: '',
  email: 'aleorozco@mymail.com',
  password: 'jschallenge31'
}

const createUser = () => {
  const userToLocal = JSON.stringify(user)
  localStorage.setItem('users', userToLocal)
}

// createUser()

// ////////// Tomar elementos del DOM
const inputEmail = document.getElementById('inputEmail')
const inputPassword = document.getElementById('inputPassword')
const Check1 = document.getElementById('Check1')
const loginButton = document.getElementById('loginButtonForm')
const loginbox = document.getElementById('buttonContainer')

const avatar = document.getElementById('avatar')

// //////////////Acceder a la base de datos de usuarios en local storage
const getUsers = () => {
  const usersFromLocal = localStorage.getItem('users')
  const user = JSON.parse(usersFromLocal)
  return user
}
getUsers()

let statusLoged = false

const logIn = () => {
  const emailValue = inputEmail.value.trim()
  const passwordValue = inputPassword.value.trim()
  const user = getUsers()
  if (emailValue !== user.email || passwordValue !== user.password) {
    alert('Email o contraseña incorrecta')
  }
  if (emailValue === user.email && passwordValue === user.password) {
    if (Check1.checked === true) {
      sessionStorage.setItem('rememberUser', true)
    }
    window.location.href = '../index.html'
    statusLoged = true
  }
}

const currentPage = window.location.pathname
console.log(currentPage)

// listeners

if (currentPage.includes('/loginForm.html')) {
  loginButton.addEventListener('click', () => {
    logIn()
  })

  inputPassword.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      logIn()
    }
  })
}

if (currentPage.includes('/index.html') && statusLoged === true) {
  loginbox.classList.add('d-flex', 'd-none')
  avatar.setAttribute('href', `${user.avatar}`)
}
