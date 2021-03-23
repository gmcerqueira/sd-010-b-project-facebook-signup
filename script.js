const inputEmailPhone = document.getElementById('user-email-phone');
const buttonGetIn = document.getElementById('button-login');
const buttonRegister = document.getElementById('facebook-register');

function buttonIn() {
  alert(inputEmailPhone.value);
}

function register() {
  
}


buttonRegister.addEventListener('click', register)
buttonGetIn.addEventListener('click', buttonIn);
