const buttonEntrar = document.getElementById('button-login');

// const form = document.getElementById('forms');

function botaoEntrar() {
  const emailTel = document.getElementById('user-email-phone').value;
  alert(emailTel);
}

buttonEntrar.addEventListener('click', botaoEntrar);

const buttonCadastrar = document.getElementById('facebook-register');
// const userName = document.getElementById('name');
// const lastName = document.getElementById('lastname');
// const phoneEmail = document.getElementById('phone_email');
// const password = document.getElementById('password');
// const birthdate = document.getElementById('birthdate');
const radioSelecionado = document.querySelector('input[name="gender"]:checked');
console.log(radioSelecionado);

function validarCadastro() {
  if (radioSelecionado.value === null) {
    alert('Campo inválido');
  }
}

buttonCadastrar.addEventListener('click', validarCadastro);
