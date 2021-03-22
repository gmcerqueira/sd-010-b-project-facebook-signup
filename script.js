const submitBtn = document.getElementById('button-login');
const user = document.getElementById('user-email-phone');

function alerta() {
  alert(user.value);
}

submitBtn.addEventListener('click', alerta);
