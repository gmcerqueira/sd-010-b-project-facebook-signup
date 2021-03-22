const buttonLogin = document.querySelector('#button-login');
const nomeSenha = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', () => {
  alert(nomeSenha.value);
});

const buttonSalvar = document.querySelector('#facebook-register');

buttonSalvar.addEventListener('click', (event) => {
  event.preventDefault();
  const input = document.querySelectorAll('input');
  const mensagem = document.querySelector('#mensagem');
  for (let index = 2; index < (input.length - 3); index += 1) {
    const genero = document.querySelector('input[name="gender"]:checked');
    if (genero == null) {
      mensagem.innerHTML = 'Campos inválidos';
      mensagem.style.color = 'red';
      break;
    }
    if (input[index].value === '') {
      mensagem.innerHTML = 'Campos inválidos';
      mensagem.style.color = 'red';
      break;
    }
  }
});

const personalizado = document.querySelector('#personalizado');
const div = document.querySelector('#campo-personalizado');

personalizado.addEventListener('click', () => {
  const input = document.createElement('input');
  const feminino = document.querySelector('#feminino');
  const masculino = document.querySelector('#masculino');
  input.type = 'text';
  input.name = 'gender-custom';
  input.placeholder = 'Gênero';
  div.appendChild(input);
  feminino.addEventListener('click', () => {
    input.remove();
  });
  masculino.addEventListener('click', () => {
    input.remove();
  });
});
