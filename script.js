const botaoLogin = document.querySelector('#button-login');

function clicaBotao() {
  botaoLogin.addEventListener('click', clica);
}

function clica() {
  const campoEmail = document.querySelector('#user-email-phone').value;
  alert(campoEmail);
}

clicaBotao();
