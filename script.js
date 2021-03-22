const inputEmailPhone = document.getElementById('user-email-phone');
const buttonGetIn = document.getElementById('button-login');

function buttonIn() {
  alert(inputEmailPhone.value);
}


buttonGetIn.addEventListener('click', buttonIn);
