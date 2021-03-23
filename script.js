const botao = document.getElementById('facebook-register');
const botaoLogin = document.getElementById('button-login');
const personalizadoRadio = document.getElementById('personalizado');
const personalizado = document.getElementById('genero-personalizado');
const campo = document.getElementById('campos-invalidos');

function mostrarElemento() {
  personalizado.style.display = 'flex';
}

function alertEmail() {
  alert(`${document.getElementById('user-email-phone').value}`);
}

function userLoged(props) {
  const rightForm = document.querySelector('.right-content');
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
  rightForm.innerHTML = '';
  rightForm.appendChild(fullName);
  rightForm.appendChild(emailPhone);
  rightForm.appendChild(birthday);
  rightForm.appendChild(genderUser);
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
