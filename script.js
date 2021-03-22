// elements

const btnLogin = document.querySelector('#button-login');
const inputEmail = document.querySelector('#user-email-phone');

btnLogin.addEventListener('click', () => {
  alert(inputEmail.value);
});
