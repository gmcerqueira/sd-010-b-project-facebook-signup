function alerta() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}

document.getElementById('button-login').addEventListener('click', alerta);
