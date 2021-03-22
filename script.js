const loginBtn = document.querySelector('#button-login');
const user = document.querySelector('#user-email-phone');

loginBtn.addEventListener('click', () => {
  const res = user.value;
  return alert(res);
});

const inputsCadastro = document.querySelectorAll('.input-cadastro');
function validaInputs() {
  let inputInvalido = false;
  for (let i = 0; i < inputsCadastro.length; i += 1) {
    if (!inputsCadastro[i].value) {
      inputInvalido = true;
    }
  }
  return inputInvalido;
}

const inputsGender = document.querySelectorAll('.input-gender');
function validateGender() {
  let validaGender = false;
  for (let i = 0; i < inputsGender.length; i += 1) {
    if (inputsGender[i].checked) {
      validaGender = true;
    }
  }
  return validaGender;
}

function selecionarGender() {
  for (let i = 0; i < inputsGender.length; i += 1) {
    if (inputsGender[i].checked) {
      return inputsGender[i].value;
    }
  }
}

function validaCadastro() {
  let valido = true;
  const erro = document.querySelector('#campos-invalidos');
  erro.innerHTML = '';

  const formCadastro = document.querySelector('#form-cadastro');

  if (!validateGender() || validaInputs()) {
    erro.innerHTML = 'Campos inválidos';
    valido = false;
  }

  formCadastro.appendChild(erro);
  return valido;
}

const cadastroBtn = document.querySelector('#facebook-register');

cadastroBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (!validaCadastro()) return;

  const inputs = [];
  for (let i = 0; i < inputsCadastro.length; i += 1) {
    inputs.push(inputsCadastro[i].value);
  }
  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = '';
  const fullName = `${inputs[0]} ${inputs[1]}`;
  const cadastro = `
    Olá, ${fullName}
    <br>${inputs[2]}
    <br>${inputs[4]}
    <br>${selecionarGender()}
  `;
  rightContent.innerHTML = cadastro;
});

const genderPersonalizado = document.querySelector('#personalizado');

genderPersonalizado.addEventListener('click', () => {
  const novoInput = document.createElement('input');
  novoInput.setAttribute('name', 'gender-custom');
  novoInput.setAttribute('placeholder', 'Gênero (opcional)');
  novoInput.className = 'input-cadastro';

  const genders = document.querySelector('.genders');

  genders.insertAdjacentElement('afterend', novoInput);
});
