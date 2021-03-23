const nome = document.getElementById('nomeLogin').value;
const sobrenome = document.getElementById('sobrenomeLogin').value;
const telefone = document.getElementById('telefoneLogin').value;
const nascimento = document.getElementById('nascimentoLogin').value;
const senha = document.getElementById('senhaLogin').value;
const elementos = [nome, sobrenome, telefone, nascimento, senha];
const botao = document.getElementById('facebook-register');
const botaoLogin = document.getElementById('button-login');
const personalizadoRadio = document.getElementById('personalizado');
const personalizado = document.getElementById('genero-personalizado');

function mostrarElemento() {
  personalizado.style.display = 'flex';
}

function checarCampo() {
  for (let index = 0; index < elementos.length; index += 1) {
    if (elementos[index] === '') {
      const campo = document.getElementById('campos-invalidos');
      campo.style.display = 'flex';
      campo.innerText = 'Campos inválidos';
      break;
    }
  }
}

function alertEmail() {
  alert(`${document.getElementById('user-email-phone').value}`);
}

window.onload = function () {
  botaoLogin.addEventListener('click', alertEmail);
  botao.addEventListener('click', checarCampo);
  personalizadoRadio.addEventListener('click', mostrarElemento);
};
