function emailTelephoneAlert() {
  const emailTel = document.getElementById('user-email-phone-label');
  const item = String(emailTel.value);
  alert(item);
}

window.onload = function () {
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', emailTelephoneAlert);
};
