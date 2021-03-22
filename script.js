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
  const personalizado = document.getElementById('personalizado');
  personalizado.styles.display = 'block';
  
}

function adcEvntoGenPers() {
  const personalizado = document.getElementById('personalizado');
  personalizado.addEventListener('click', mostrarElemento);
}

adcEvntoGenPers();
