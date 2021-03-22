function alertLogin() {
  alert(document.getElementById('user-email-phone').value);
}

document.getElementById('button-login').addEventListener('click', alertLogin);
