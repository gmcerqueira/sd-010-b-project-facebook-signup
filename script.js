function entrar() {
  const btnentrar = document.getElementById('button-login');
  const email = document.getElementById('user-email-phone');
  function alertemail() {
    alert(email.value);
  }
  btnentrar.addEventListener('click', alertemail);
}

entrar();
