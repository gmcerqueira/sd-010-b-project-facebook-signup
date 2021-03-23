const nome = document.getElementById('nomeLogin').value;
const sobrenome = document.getElementById('sobrenomeLogin').value;
const telefone = document.getElementById('telefoneLogin').value;
const nascimento = document.getElementById('nascimentoLogin').value;
const senha = document.getElementById('senhaLogin').value;

function mostrarElemento() {
  const personalizado = document.getElementById('genero-personalizado');
  personalizado.style.display = 'flex';
}

function adcEvntoGenPers() {
  const personalizado = document.getElementById('personalizado');
  personalizado.addEventListener('click', mostrarElemento);
}

adcEvntoGenPers();

function checarCampo() {
  const elementos = [nome, sobrenome, telefone, nascimento, senha];

  for (let index = 0; index < elementos.length; index += 1) {
    if (elementos[index] === '') {
      const campo = document.getElementById('campos-invalidos');
      campo.style.display = 'flex';
      campo.innerText = 'Campos inválidos';
      break;
    }
  }
}

function validarCadastro() {
  const botao = document.getElementById('facebook-register');
  botao.addEventListener('click', checarCampo);
}

validarCadastro();
