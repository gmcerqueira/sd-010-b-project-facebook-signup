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

function createElement(fullName, emailPhone, birthday, genderUser) {
  const createSection = document.createElement('section');
  createSection.appendChild(fullName);
  createSection.appendChild(emailPhone);
  createSection.appendChild(birthday);
  createSection.appendChild(genderUser);
  return createSection;
}

function userLoged(props) {
  const fn = document.createElement('h1');
  const birthdayP = props[3];
  const phoneP = props[2];
  fn.innerText = `Olá, ${props[0]} ${props[1]}`;
  const ep = document.createElement('p');
  ep.innerText = phoneP;
  const bt = document.createElement('p');
  bt.innerText = birthdayP;
  const gd = document.createElement('p');
  const valorR = document.querySelector('input[type="radio"]:checked').value;
  gd.innerText = valorR;
  mainContent.removeChild(rightForm);
  mainContent.appendChild(createElement(fn, ep, bt, gd));
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
