function alertEntrar() {
  const user = document.getElementById('user-email-phone').value;
  alert(user);
}

document.getElementById('button-login').addEventListener('click', alertEntrar);
const radioButtonPersonalizado = document.getElementById('Personalizado');

function createCustomGenderInput() {
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = 'gender-custom';
  newInput.placeholder = 'Gênero (opcional)';
  const divCustomGender = document.querySelector('.custom-gender-container');
  divCustomGender.appendChild(newInput);
}

radioButtonPersonalizado.addEventListener('click', createCustomGenderInput);
