const buttonLogin = document.getElementById('button-login');
const emailValue = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', () => {
  alert(emailValue.value);
});
