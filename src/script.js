function signup () {
  let username = document.getElementById('signupEmail').value
  let password = document.getElementById('signupPassword').value
  let confirmPassword = document.getElementById('confirmPassword').value

  if (username && password && confirmPassword) {
    if (password === confirmPassword) {
      localStorage.setItem('username', username)
      localStorage.setItem('password', password)
      alert('Account successfully created!')
      location.href = './index.html'
    } else {
      alert('Passwords do not match.')
    }
  } else {
    alert('Please fill all fields.')
  }
  event.preventDefault()
}

function login () {
  let enteredUsername = document.getElementById('loginEmail').value
  let enteredPassword = document.getElementById('loginPassword').value

  let storedUsername = localStorage.getItem('username')
  let storedPassword = localStorage.getItem('password')

  if (
    enteredUsername === storedUsername &&
    enteredPassword === storedPassword
  ) {
    alert('Login successful!')
    location.href = './home.html' // redirect to another page
  } else {
    alert('Incorrect username or password.')
  }
  event.preventDefault()
}

document.getElementById('homename').innerText = localStorage.getItem('username')
document.getElementById('resultUname').innerText =
  localStorage.getItem('username')


