/* Dá um alerta quando aperta o botão Entrar */
const valorLogin = document.querySelector('#user-email-phone');
const btnEntrar = document.querySelector('#button-login');
btnEntrar.addEventListener('click', () => {
  alert(valorLogin.value);
});

/* Cria um novo input para a opção de gênero Personalizado */
const genderOption = document.querySelector('.gender-section');
const newInput = document.querySelector('#gender-custom');
genderOption.addEventListener('click', (event) => {
  const evento = event.target;
  if (evento.id === 'custom') {
    newInput.style.display = 'block';
  } else {
    newInput.style.display = 'none';
  }
});

function genderSelected() {
  const female = document.querySelector('#female');
  const male = document.querySelector('#male');
  const custom = document.querySelector('#custom');
  let gender = '';
  if (female.checked) gender = female.value;
  if (male.checked) gender = male.value;
  if (custom.checked) gender = custom.value;
  return gender;
}

function check() {
  const input = document.querySelectorAll('.required');
  let notValid = false;
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].value === '') {
      notValid = true;
    }
  }
  return notValid;
}

function checkRadio() {
  const input = document.querySelectorAll('.rdBtn');
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].checked) {
      return false;
    }
  }
  return true;
}
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const phoneEmail = document.querySelector('#phone-email');
const birthdate = document.querySelector('#birthdate');
const sectionForms = document.querySelector('.section-forms');
const conteudoDireita = document.querySelector('.right-content');
const form = document.querySelector('.form-right-content');
const inputsForm = form.querySelectorAll('.input-class');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const radioSelected = document.querySelector('.selected');
  if (check() || checkRadio()) {
    document.querySelector('#invalid-message').innerHTML = 'Campos inválidos';
  } else {
    const criaTagP = document.createElement('p');
    criaTagP.innerHTML = `Olá, ${firstName.value} ${lastName.value}
    ${phoneEmail.value}
    ${birthdate.value};
    ${genderSelected()}`;
    conteudoDireita.appendChild(criaTagP);
    conteudoDireita.removeChild(sectionForms);
  }
});
