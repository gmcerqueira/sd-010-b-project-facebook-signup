function emailTelephoneAlert() {
  const emailTel = document.getElementById('user-email-phone-label');
  const item = String(emailTel.value);
  alert(item);
};

window.onload = function () {
  document.getElementById('button-login').addEventListener('click', emailTelephoneAlert);
};
