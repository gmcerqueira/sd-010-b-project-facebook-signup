const buttonLogin = document.querySelector('#button-login');

buttonLogin.addEventListener('click', () => {
  alert('Email ou telefone');
});

const buttonSalvar = document.querySelector('#facebook-register');

buttonSalvar.addEventListener('click', (event) => {
  event.preventDefault();
  const input = document.querySelectorAll('input');
  for (let index = 2; index < (input.length - 3); index += 1) {
    if (input[index].value === '') {
      alert('Campos inválidos');
      break;
    }
  }
});
