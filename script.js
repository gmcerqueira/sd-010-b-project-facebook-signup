const loginButton = document.querySelector('#button-login');
const inputEmail = document.querySelector('#user-email-phone');
const genero = document.getElementById('personalizado');
const customGender = document.getElementById('campo-personalizado');
const input = document.createElement('input');
const feminino = document.querySelector('#feminino');
const masculino = document.querySelector('#masculino');
const inputsForm = document.querySelectorAll('.input');
const mensagem = document.querySelector('#mensagem');
const novaConta = document.querySelector('.nova-conta');

function alertEmail() {
  alert(inputEmail.value);
}

loginButton.addEventListener('click', alertEmail);

// --------------------

function removeCampo() {
  input.remove();
}

function generoPerson() {
  input.type = 'texto';
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
  customGender.appendChild(input);
  feminino.addEventListener('click', removeCampo);
  masculino.addEventListener('click', removeCampo);
}
genero.addEventListener('click', generoPerson);

function validaCampos(evento) {
  evento.preventDefault();
  for (let i = 0; i < inputsForm.length; i += 1) {
    // https://qastack.com.br/programming/1423777/how-can-i-check-whether-a-radio-button-is-selected-with-javascript
    const generoSelec = document.querySelector('input[name="gender"]:checked');
    if (inputsForm[i].value === '' || generoSelec === null) {
      mensagem.innerHTML = 'Campos inválidos';
      mensagem.style.color = 'red';
    }
  }
}

novaConta.addEventListener('submit', validaCampos);
