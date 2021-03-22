const buttonLogin = document.querySelector('#button-login');
const catchValueInput = document.querySelector("user-email-phone");
buttonLogin.addEventListener('click', () => {
  console.log('teste');
  alert(catchValueInput.value);
});
