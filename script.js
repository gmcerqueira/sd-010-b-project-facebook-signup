function alertEntrar() {
  const user = document.getElementById('user-email-phone').value;
  alert(user);
}

document.getElementById('button-login').addEventListener('click', alertEntrar);
const radioButtonPersonalizado = document.getElementById('Personalizado');

function createCustomGenderInput() {
  const put = document.querySelector('.custom-gender-container').firstChild;
  if (put == null) {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'gender-custom';
    newInput.placeholder = 'Gênero (opcional)';
    const divCustomGender = document.querySelector('.custom-gender-container');
    divCustomGender.appendChild(newInput);
  }
}

radioButtonPersonalizado.addEventListener('click', createCustomGenderInput);

function removeCustomGenderInput() {
  const div = document.querySelector('.custom-gender-container');
  const input = div.firstChild;
  if (input != null) {
    div.removeChild(input);
  }
}

const masc = document.getElementById('Masculino');
masc.addEventListener('click', removeCustomGenderInput);
const fem = document.getElementById('Feminino');
fem.addEventListener('click', removeCustomGenderInput);
