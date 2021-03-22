const btnEntrar = document.getElementById('button-login');
const campEmail = document.getElementById('user-email-phone');

function entrar ()  {
  alert(campEmail.value);
}

btnEntrar.addEventListener('click', entrar);
