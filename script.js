const button = document.getElementById('button-login');
function alertButton() {
  const emailTel = document.getElementById('user-email-phone');
  alert(emailTel.value);
}
button.addEventListener('click', alertButton);
