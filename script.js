const buttonLogin = document.getElementById('button-login');

function alerta() {
  const userValue = document.getElementById('user-email-phone').value;
  alert(userValue);
}

buttonLogin.addEventListener('click', alerta);
