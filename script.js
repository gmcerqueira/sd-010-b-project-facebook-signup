const botaoLogin = document.querySelector('#button-login');

function clica() {
  const campoEmail = document.querySelector('#user-email-phone').value;
  alert(campoEmail);
}

function clicaBotao() {
  botaoLogin.addEventListener('click', clica);
}

clicaBotao();

const botaoCadastro = document.querySelector('#facebook-register');

//verifica se os campos estão preenchidos
function verificaCadastro() {
  const div = document.querySelector('#verifica-cadastro');
  const p = document.createElement('p');
  const campoNome = document.querySelector('#nome').value;
  const campoSobrenome = document.querySelector('#sobrenome').value;
  const campoEmailPhone = document.querySelector('#email-phone').value;
  const campoSenha = document.querySelector('#senha').value;
  const campoDataNasc = document.querySelector('#birth-date').value;

  if (campoNome || campoSobrenome || campoEmailPhone || campoSenha || campoDataNasc === null) {
    div.appendChild(p).innerHTML = 'Campos Inválidos';
  }
}

//clique do botão
function clicaCadastro() {
  botaoCadastro.addEventListener('click', verificaCadastro)
}

clicaCadastro();