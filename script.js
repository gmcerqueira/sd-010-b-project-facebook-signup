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

function finalizaCadastro() {
  const inputs = [];
  for (let i = 0; i < inputsCadastro.length; i += 1) {
    inputs.push(inputsCadastro[i].value);
  }
  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = '';
  const fullName = document.createElement('p');
  const emailOuTelefone = document.createElement('p');
  const dataNascimento = document.createElement('p');
  const gender = document.createElement('p');
  fullName.innerHTML = `Olá, ${inputs[0]} ${inputs[1]}`;
  emailOuTelefone.innerHTML = `Email ou telefone: ${inputs[2]}`;
  dataNascimento.innerHTML = `Data de nascimento ${inputs[4]}`;
  gender.innerHTML = `Gênero ${selecionarGender()}`;
  rightContent.appendChild(fullName);
  rightContent.appendChild(emailOuTelefone);
  rightContent.appendChild(dataNascimento);
  rightContent.appendChild(gender);
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
