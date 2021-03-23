const buttonLogin = document.getElementById('button-login');

function alerta() {
  const userValue = document.getElementById('user-email-phone').value;
  alert(userValue);
}

buttonLogin.addEventListener('click', alerta);

const registerButton = document.getElementById('facebook-register');

const userInfoArray = document.querySelectorAll('.user-info');

function verify() {
  for (let index = 0; index < userInfoArray.length; index += 1) {
    if (userInfoArray[index].value === '') {
      const p = document.createElement('p');
      p.innerText = 'Campos inválidos';
      document.getElementById('user-info-form').appendChild(p);
      break;
    }
  }
}

registerButton.addEventListener('click', verify);

const getPersonalizado = document.getElementById('personalizado');

function createDiv() {
  const inputNewGender = document.createElement('input');
  inputNewGender.type = 'text';
  inputNewGender.name = 'gender-custom';
  inputNewGender.placeholder = 'Gênero (opcional)';
  document.getElementById('gender-div').appendChild(inputNewGender);
}

getPersonalizado.addEventListener('click', createDiv);

const dataKey = {};
const mainContent = document.querySelector('.main-content');
// const rightContent = document.querySelector('.right-content');
const createElement = document.createElement('div');

function showData() {
  for (let index = 0; index < userInfoArray.length; index += 1) {
    if (userInfoArray[index] !== '') {
      dataKey.firstN = document.getElementById('firstname').value;
      dataKey.lastN = document.getElementById('lastname').value;
      dataKey.phoneEmail = document.getElementById('phone-email').value;
      dataKey.birthDate = document.getElementById('birthdate').value;
      dataKey.gen = document.querySelector('input[type="radio"]:checked').value;
      createElement.innerHTML = `<p>Olá, ${dataKey.firstN} ${dataKey.lastN}</p>
      <p>${dataKey.phoneEmail}</p>
      <p>${dataKey.birthDate}</p>
      <p>${dataKey.gen}</p>`;
      mainContent.appendChild(createElement);
      break;
    }
  }
}

registerButton.addEventListener('click', showData);
registerButton.addEventListener('click', (event) => event.preventDefault());
