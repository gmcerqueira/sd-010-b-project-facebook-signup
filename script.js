function mostrarEmail() {
  const texto = document.getElementById("user-email-phone").value;
  alert(`${texto}`);
}

function bttEntrar() {
const botaoLogin = document.getElementById("button-login");
botaoLogin.addEventListener('click', mostrarEmail);
}

bttEntrar();
