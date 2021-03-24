const inputEmail = document.querySelector('#user-email-phone');
const btnEnviar = document.querySelector('#button-login');
const getName = document.getElementById('firstname');
const getLastName = document.getElementById('lastname');

function alertEmail() {
  alert(inputEmail.value);
}

btnEnviar.addEventListener('click', alertEmail);

// 18°
const getButton = document.getElementById('facebook-register');
getButton.addEventListener('click', () => {
  const getFilho = document.querySelector('.formContato').children;
  const getCamposInvalidos = document.getElementById('camposInvalidos');
  for (let i = 1; i < getFilho.length; i += 1) {
    if (getFilho[i].value === '') {
      getCamposInvalidos.innerHTML = 'Campos inválidos';
    }
  }
  // 20°
  if(getName.value && getLastName.value){
    alert(`Olá ${getName.value} ${getLastName.value}`);
}
});

// 19
const genderOptional = document.createElement('input');
genderOptional.name = 'gender-custom';
genderOptional.placeholder = 'Gênero (opcional)';
genderOptional.id = 'gender-optional';
genderOptional.className = 'selected';
const getDivFlexForm = document.querySelector('.flex-form2');
const customRadio = document.querySelector('#personalizado');
const femaleRadio = document.querySelector('#feminino');
const maleRadio = document.querySelector('#masculino');

customRadio.addEventListener('click', () => {
  getDivFlexForm.appendChild(genderOptional);
});

femaleRadio.addEventListener('click', () => {
  const elemento = document.querySelector('.selected');
  if (elemento) {
    elemento.parentNode.removeChild(elemento);
  }
});

maleRadio.addEventListener('click', () => {
  const elemento2 = document.querySelector('.selected');
  if (elemento2) {
    elemento2.parentNode.removeChild(elemento2);
  }
});
