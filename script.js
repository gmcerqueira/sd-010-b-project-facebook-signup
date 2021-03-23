const botao = document.getElementById('facebook-register');
const botaoLogin = document.getElementById('button-login');
const personalizadoRadio = document.getElementById('personalizado');
const personalizado = document.getElementById('genero-personalizado');
const campo = document.getElementById('campos-invalidos');
const mainContent = document.querySelector('.main-content');
const rightForm = document.querySelector('.right-content');

function mostrarElemento() {
  personalizado.style.display = 'flex';
}

function alertEmail() {
  alert(`${document.getElementById('user-email-phone').value}`);
}

function userLoged(props) {
  const fullName = document.createElement('h1');
  const birthdayP = props[3];
  const phoneP = props[2];
  fullName.innerText = `Olá, ${props[0]} ${props[1]}`;
  const emailPhone = document.createElement('p');
  emailPhone.innerText = phoneP;
  const birthday = document.createElement('p');
  birthday.innerText = birthdayP;
  const genderUser = document.createElement('p');
  const valorR = document.querySelector('input[type="radio"]:checked').value;
  genderUser.innerText = valorR;
  mainContent.removeChild(rightForm);
  mainContent.appendChild(createElement(fullName, emailPhone, birthday, genderUser));
}

function createElement(fullName, emailPhone, birthday, genderUser) {
  const createSection = document.createElement('section');
  for (let index = 0; index < 4; index += 1) {
    if (index === 0) {
      createSection.appendChild(fullName);
    } else if (index === 1) {
      createSection.appendChild(emailPhone);
    } else if (index === 2) {
      createSection.appendChild(birthday);
    } else {
      createSection.appendChild(genderUser);
    }
  }
    return createSection;
}

function checarCampo() {
  const nome = document.getElementById('nomeLogin').value;
  const sobrenome = document.getElementById('sobrenomeLogin').value;
  const telefone = document.getElementById('telefoneLogin').value;
  const nascimento = document.getElementById('nascimentoLogin').value;
  const senha = document.getElementById('senhaLogin').value;
  const elementos = [nome, sobrenome, telefone, nascimento, senha];
  for (let index = 0; index < elementos.length; index += 1) {
    if (elementos[index] === '') {
      campo.style.display = 'flex';
      campo.innerText = 'Campos inválidos';
      break;
    }
  }
  if (campo.innerText !== 'Campos inválidos') {
    userLoged(elementos);
  }
}

function initalizeApp() {
  botaoLogin.addEventListener('click', alertEmail);
  botao.addEventListener('click', checarCampo);
  personalizadoRadio.addEventListener('click', mostrarElemento);
  botao.addEventListener('click', mostrarElemento);
}

initalizeApp();
