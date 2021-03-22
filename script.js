const botaoEntrar = document.getElementById('button-login');

function alertaEmailOuTelefone() {
  const emailOuTelefone = document.getElementById('user-email-phone').value;
  alert(emailOuTelefone);
}
botaoEntrar.addEventListener('click', alertaEmailOuTelefone);
