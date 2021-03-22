const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', alerta);

function alerta() {
  const userValue = document.getElementById('user-email-phone').value;
  alert(userValue);
}

const registerButton = document.getElementById('facebook-register');

registerButton.addEventListener('click', verify);

let userInfoArray = document.querySelectorAll('.user-info');

function verify () {
  for (let index = 0; index < userInfoArray.length; index += 1) {
    if (userInfoArray[index].value === "") {
      alert("Campos inválidos");
      break;
    }
  }
}