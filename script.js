const inputEmailPhone = document.getElementById('user-email-phone');
const buttonGetIn = document.getElementById('button-login');
const buttonSubmit = document.getElementById('facebook-register');

function buttonIn() {
  alert(inputEmailPhone.value);
}

buttonGetIn.addEventListener('click', buttonIn);

/* Requisito 18: verificando se algum dos campos é vazio: */
function validateForm() {
  let isValid = true;
  inputs = ['firstname', 'lastname', 'phone_email', 'password', 'birthdate', 'gender'];
  for (let input of inputs) {
    content = document.forms["form"][input].value;
    if (content === '') {
      isValid = false;
    }
  }
  if (!isValid) alert('Campos inválidos');
  return false;
}
