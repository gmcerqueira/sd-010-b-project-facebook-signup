const loginButton = document.querySelector('#button-login');
const inputEmail = document.querySelector('#user-email-phone-label');

function alertEmail() {
  alert(`${inputEmail.value}`);
}

loginButton.addEventListener('click', alertEmail);
