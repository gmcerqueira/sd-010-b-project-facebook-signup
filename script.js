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

function addName() {
  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;

  const fullName = document.createElement('p');
  fullName.innerHTML = `Olá, ${firstName} ${lastName}`;
  return fullName;
}

function addPhoneMail() {
  const phoneEmail = document.querySelector('#phone_email').value;

  const login = document.createElement('p');
  login.innerHTML = `Email ou telefone: ${phoneEmail}`;
  return login;
}

function addBirthDate() {
  const birthDate = document.querySelector('#birth-date').value;

  const date = document.createElement('p');
  date.innerHTML = `Data de nascimento: ${birthDate}`;
  return date;
}

function addGender() {
  const gender = selecionarGender();

  const selected = document.createElement('p');
  selected.innerHTML = `Gênero: ${gender}`;
  return selected;
}

function finalizaCadastro() {
  const main = document.querySelector('.main-content');
  const oldRightContent = document.querySelector('.right-content');
  oldRightContent.style.display = 'none';
  const newRightContent = document.createElement('div');
  newRightContent.className = 'right-content';
  newRightContent.appendChild(addName());
  newRightContent.appendChild(addPhoneMail());
  newRightContent.appendChild(addBirthDate());
  newRightContent.appendChild(addGender());

  main.appendChild(newRightContent);
}

const cadastroBtn = document.querySelector('#facebook-register');

cadastroBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (!validaCadastro()) return;

  finalizaCadastro();
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
