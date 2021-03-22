const btnLogin = document.getElementById('button-login');
const inputEmailTel = document.querySelector('#user-email-phone-label');
const inputPassword = document.querySelector('#user-password-label');

function alertLogin() {
  if (inputEmailTel.value !== '') {
    alert(inputEmailTel.value);
  } else if (inputPassword.value !== '') {
    alert(inputPassword.value);
  }
}

btnLogin.addEventListener('click', alertLogin);