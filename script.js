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

//  https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
function cadastrarButton() {
  const submitButton = document.getElementById('facebook-register');
  submitButton.addEventListener('click', (event) => {
    const div = document.getElementById('div-error');

    if (validarCampos() || validarGenero()) {
      div.innerHTML = 'Campos inválidos';
      event.preventDefault();
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
  const inputs = document.querySelectorAll('.input-form');
  const genderF = document.getElementById('feminino');
  const genderM = document.getElementById('masculino');

  input.className = 'geral input-form';
  if (gender.checked && (inputs.length == 5)) {
    section.appendChild(input);
  }

  if ((genderF.checked || genderM.checked) && (inputs.length == 6)) {
    section.removeChild(section.lastChild);
  }
}

function verificarGenero() {
  const genders = document.getElementsByClassName('radio-gender');

  for (let index = 0; index < 3; index += 1) {
    genders[index].addEventListener('click', generoPersonalizado);
  }
}

verificarGenero();
