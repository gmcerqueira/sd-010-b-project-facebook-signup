const buttonLogin = document.getElementById('button-login');

function alerta() {
  const userValue = document.getElementById('user-email-phone').value;
  alert(userValue);
}

buttonLogin.addEventListener('click', alerta);

const registerButton = document.getElementById('facebook-register');

const userInfoArray = document.querySelectorAll('.user-info');

function verify() {
  for (let index = 0; index < userInfoArray.length; index += 1) {
    if (userInfoArray[index].value === '') {
      alert('Campos inválidos');
      break;
    }
  }
}

registerButton.addEventListener('click', verify);
