const buttonEntrar = document.getElementById('button-login');

function botaoEntrar() {
  const emailTel = document.getElementById('user-email-phone').value;
  alert(emailTel);
}

buttonEntrar.addEventListener('click', botaoEntrar);

const buttonCadastrar = document.getElementById('facebook-register');
const userName = document.getElementById('name');
const lastName = document.getElementById('lastname');
const phoneEmail = document.getElementById('phone_email'); 
const password = document.getElementById('password'); 
const birthdate = document.getElementById('birthdate'); 
const radioSelecionado = document.querySelector('input[name="gender"]:checked');

function validarCadastro(){
  if((userName.value === "") || (lastName.value === "") || (phoneEmail.value === "") || (password.value === "") || (birthdate.value === "") || (radioSelecionado.value === "" )){
    alert('Campo inválido');
  } else {
    alert('Tudo ok'); 
  }
}

buttonCadastrar.addEventListener('click', validarCadastro); 

