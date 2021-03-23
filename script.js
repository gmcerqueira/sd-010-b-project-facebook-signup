const btnEntrar = document.getElementById('button-login');
const emailTelefone = document.getElementById('user-email-phone');

// verifica se a pessoa digitou o email e clicou em entrar
function entrar() {
  const emailPessoa = emailTelefone.value;
  if (emailPessoa == '') {
    alert('Digite seu email!');
  } else {
    alert(emailPessoa);
  }
}
btnEntrar.addEventListener('click', entrar);
