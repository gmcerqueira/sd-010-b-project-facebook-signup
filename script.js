let inputEmail = document.getElementById("user-email-phone");
let clickBotao = document.getElementById("button-login");

function exibeAlerta(){
  alert (inputEmail.value);
}

clickBotao.addEventListener("click", exibeAlerta);