const buttonLogin = document.querySelector('#button-login');
const catchValueInput = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', () => {
  if (catchValueInput.value !== '') {
    alert(catchValueInput.value);
  } else {
    alert('Campo Vazio');
  }
});
