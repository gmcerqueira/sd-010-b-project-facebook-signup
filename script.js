const inputEmail = document.getElementById('user-email-phone');
const clickBotao = document.getElementById('button-login');

function exibeAlerta() {
  alert(inputEmail.value);
}

clickBotao.addEventListener('click', exibeAlerta);
