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

  if (
    document.getElementById('nomeLogin').value === '' ||
    document.getElementById('sobrenomeLogin').value === '' ||
    document.getElementById('telefoneLogin').value === '' ||
    document.getElementById('nascimentoLogin').value === '' ||
    document.getElementById('senhaLogin').value === ''
  ) {
    campo.style.display = 'flex';
    campo.innerText = 'Campos inválidos';
  }
}

function validarCadastro() {
  document.getElementById('facebook-register').addEventListener('click', checarCampo);
}

validarCadastro();
