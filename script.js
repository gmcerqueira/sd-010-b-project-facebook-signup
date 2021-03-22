const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', () => {
  const entradaEmail = document.getElementById('user-email-phone');
  if (entradaEmail.value == null) {
    alert('Email ou telefone');
  }
});
