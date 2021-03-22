function alerta() {
  alert("Email ou telefone");
}

window.onload = function(){
document.getElementById('button-login').addEventListener("click", alerta);
}
