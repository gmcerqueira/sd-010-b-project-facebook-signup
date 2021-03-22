const loginBtn = document.querySelector('#button-login');
const user = document.querySelector('#user-email-phone');

loginBtn.addEventListener('click', () => {
  const res = user.value;
  return alert(res);
});

const cadastroBtn = document.querySelector('#facebook-register');

cadastroBtn.addEventListener('click', (event) => {
  const erro = document.querySelector('#campos-invalidos');
  erro.innerHTML = '';

  const formCadastro = document.querySelector('#form-cadastro');

  event.preventDefault();
  const inputsCadastro = document.querySelectorAll('.input-cadastro');
  for (let i = 0; i < inputsCadastro.length; i += 1) {
    if (!inputsCadastro[i].value) {
      erro.innerHTML = 'Campos inválidos';
      formCadastro.appendChild(erro);
      break;
    }
  }

  const inputsGender = document.querySelectorAll('.input-gender');
  let validaGender = false;
  for (let i = 0; i < inputsGender.length; i += 1) {
    if (inputsGender[i].checked) {
      validaGender = true;
    }
  }
  if (!validaGender) {
    erro.innerHTML = 'Campos inválidos';
    formCadastro.appendChild(erro);
  }
});
