const buttonLogin = document.querySelector('#button-login');
const nomeSenha = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', () => {
  alert(nomeSenha.value);
});

const buttonSalvar = document.querySelector('#facebook-register');

buttonSalvar.addEventListener('click', () => {
  const input = document.querySelectorAll('input');
  for (let index = 2; index < (input.length - 3); index += 1) {
    if (input[index].value === '') {
      alert('Campos inválidos');
      break;
    }
  }
});
/*  const personalizado = document.querySelector('#facebook-register');

personalizado.addEventListener('click', () =>{
  const input = document.createElement('input')
  input.type = 'text';
  input.name = 'gender-custom';
  input.placeholder = 'Gênero'
})  */
