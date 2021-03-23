const btnEntrar = document.getElementById('button-login');
const campEmail = document.getElementById('user-email-phone');

function entrar() {
  alert(campEmail.value);
}

btnEntrar.addEventListener('click', entrar);

const registerBtn = document.querySelector('#facebook-register');
const campos = document.querySelectorAll('.input');

function validate(event) {
  const invalid = document.querySelector('#invalid');
  for (let index = 0; index < campos.length; index += 1) {
    if (campos[index].value === '') {
      event.preventDefault();
      invalid.innerText = 'Campos inválidos';
    }
  }
}

registerBtn.addEventListener('click', validate);
