const loginBtn = document.querySelector('#button-login');
const user = document.querySelector('#user-email-phone');

loginBtn.addEventListener('click', () => {
  const res = user.value;
  return alert(res);
});

function validaInputs() {
  let inputInvalido = false;
  const inputsCadastro = document.querySelectorAll('.input-cadastro');
  for (let i = 0; i < inputsCadastro.length; i += 1) {
    if (!inputsCadastro[i].value) {
      inputInvalido = true;
    }
  }
  return inputInvalido;
}

function validateGender() {
  const inputsGender = document.querySelectorAll('.input-gender');
  let validaGender = false;
  for (let i = 0; i < inputsGender.length; i += 1) {
    if (inputsGender[i].checked) {
      validaGender = true;
    }
  }
  return validaGender;
}

const cadastroBtn = document.querySelector('#facebook-register');

cadastroBtn.addEventListener('click', (event) => {
  const erro = document.querySelector('#campos-invalidos');
  erro.innerHTML = '';

  const formCadastro = document.querySelector('#form-cadastro');

  event.preventDefault();

  if (!validateGender() || validaInputs()) erro.innerHTML = 'Campos inválidos';

  formCadastro.appendChild(erro);
});
