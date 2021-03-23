const loginButton = document.querySelector('#button-login');
const inputEmail = document.querySelector('#user-email-phone');

function alertEmail() {
  alert(inputEmail.value);
}

loginButton.addEventListener('click', alertEmail);

// --------------------

const genero = document.getElementById('personalizado');
const customGender = document.getElementById('campo-personalizado');
const input = document.createElement('input');
const feminino = document.querySelector('#feminino');
const masculino = document.querySelector('#masculino');

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
