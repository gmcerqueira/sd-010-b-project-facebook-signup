const loginButton = document.querySelector('#button-login');
const inputEmail = document.querySelector('#user-email-phone-label');

loginButton.addEventListener('click', function alertEmail() {
  alert(`${inputEmail.value}`);
});
