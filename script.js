let buttonLogin =document.getElementById('button-login');

function alerta() {
  let userValue = document.getElementById('user-email-phone').value;
  alert(userValue);
}

buttonLogin.addEventListener('click', alerta);
