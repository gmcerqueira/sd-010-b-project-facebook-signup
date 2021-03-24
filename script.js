function validarCampos() {
  const validateFields = document.querySelectorAll('.input-form');

  for (let index = 0; index < validateFields.length; index += 1) {
    if (validateFields[index].value === '') {
      return true;
    }
  }
  return false;
}

function validarGenero() {
  const genders = document.getElementsByClassName('radio-gender');

  for (let index = 0; index < 3; index += 1) {
    if (genders[index].checked) {
      return false;
    }
  }
  return true;
}

//https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
function cadastrarButton() {
  const submitButton = document.getElementById('facebook-register');
  submitButton.addEventListener('click', function (event) {
    const div = document.getElementById('div-error')

    if (validarCampos() || validarGenero()) {
      div.innerHTML = 'Campos inválidos';
      event.preventDefault();
      console.log("aqui")
    }
  });
}

cadastrarButton();

const buttonEnter = document.getElementById('button-login');
const showImput = document.getElementById('user-email-phone');

buttonEnter.addEventListener('click', () => {
  alert(showImput.value);
});

function generoPersonalizado() {
  const gender = document.getElementById('personalizado');
  const section = document.getElementById('div-gender');
  const input = document.createElement('input');

  input.className = 'geral input-form';

  if (gender.checked) {
    section.appendChild(input);
  }
}

function verificarGenero() {
  const genders = document.getElementsByClassName('radio-gender');

  for (let index = 0; index < 3; index += 1) {
    genders[index].addEventListener('click', generoPersonalizado);
  }
}

verificarGenero();
