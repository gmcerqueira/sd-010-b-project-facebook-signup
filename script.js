function alertEntrar() {
  const user = document.getElementById('user-email-phone').value;
  alert(user);
}

document.getElementById('button-login').addEventListener('click', alertEntrar);
