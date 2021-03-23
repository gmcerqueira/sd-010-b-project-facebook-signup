const botao = document.getElementById('facebook-register');
const botao1 = document.getElementById('facebook-register');
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
  const v1 = `Olá, ${props[0]} ${props[1]}`;
  const v2 = `Celular/Email ${props[2]}`;
  const v3 = `Data de Nascimento ${props[3]}`;
  const v4 = document.querySelector('input[type="radio"]:checked').value;
  mainContent.removeChild(rightForm);
  const div = document.createElement('div');
  mainContent.appendChild(div);
  const createSection = document.createElement('p');
  createSection.innerText = `${v1}. ${v2}. ${v3}. Gênero ${v4}`;
  div.appendChild(createSection);
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
  botao1.addEventListener('click', mostrarElemento);
}

initalizeApp();
