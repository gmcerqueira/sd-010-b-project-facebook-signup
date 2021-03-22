const button = document.getElementById('button-login');

function alertButton() {
  const emailTel = document.getElementById('user-email-phone');
  alert(emailTel.nodeValue);
}
button.addEventListener('click', alertButton);
