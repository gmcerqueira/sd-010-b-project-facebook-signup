const buttonLogin = document.querySelector('#button-login');
const catchValueInput = document.querySelector('#user-email-phone');
console.log(catchValueInput);
buttonLogin.addEventListener('click', () => {
	if (catchValueInput.value == null) {
    alert('Campo Vazio');
  }
  console.log('teste');
	console.log(catchValueInput.value);
  alert(catchValueInput.value);
});