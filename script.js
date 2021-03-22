const buttonLogin = document.querySelector('#button-login');
const nomeSenha = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', () => {
  alert(nomeSenha.value);
});

const buttonSalvar = document.querySelector('#facebook-register');

buttonSalvar.addEventListener('click', () => {
  const input = document.querySelectorAll('input');
  for (let index = 2; index < (input.length - 3); index += 1) {
    const genero = document.querySelector('input[name="gender"]:checked');
    if (genero == null) {
      alert('Campos inválidos');
      break;
    }
    if (input[index].value === '') {
      alert('Campos inválidos');
      break;
    }
  }
});
