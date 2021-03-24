const btnEntrar = document.getElementById('button-login');
const emailTelefone = document.getElementById('user-name-phone');

function alerta() {
  alert(emailTelefone.value);
}

btnEntrar.addEventListener('click', alerta);
