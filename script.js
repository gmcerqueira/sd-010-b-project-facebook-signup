function mostrarEmail() {
  const texto = document.getElementById('user-email-phone').value;
  alert(`${texto}`);
}

function bttEntrar() {
  const botaoLogin = document.getElementById('button-login');
  botaoLogin.addEventListener('click', mostrarEmail);
}

bttEntrar();

function mostrarElemento() {
  const personalizado = document.getElementById('genero-personalizado');
  personalizado.style.display = 'flex';
}

function adcEvntoGenPers() {
  const personalizado = document.getElementById('personalizado');
  personalizado.addEventListener('click', mostrarElemento);
}

adcEvntoGenPers();

function esconderElemento() {
  const personalizado = document.getElementById('genero-personalizado');
  personalizado.style.display = 'none';
}

function adcEvntoMascFem() {
  const masculino = document.getElementById('masculino');
  masculino.addEventListener('click', esconderElemento);
  const feminino = document.getElementById('feminino');
  feminino.addEventListener('click', esconderElemento);
}

adcEvntoMascFem();
