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
  let campo = document.getElementById('campos-invalidos');
  campo.innerText = '';

    let nome = document.getElementById('nomeLogin').value;
    let sobrenome = document.getElementById('sobrenomeLogin').value;
    let telefone = document.getElementById('telefoneLogin').value;
    let nascimento = document.getElementById('nascimentoLogin').value;
    let senha = document.getElementById('senhaLogin').value;

  if (nome === '' || sobrenome === '' || telefone === '' || nascimento === '' || senha === '' ) {
    campo.style.display = 'flex';
    campo.innerText = 'Campos inválidos';
  }
}

function validarCadastro() {
  let botao = document.getElementById('facebook-register');
  botao.addEventListener('click', checarCampo);
}

validarCadastro();
