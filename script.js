//vamos utilizar js?
// Sim Vamos inclusive no botâo Entrar!
const btnEntrar = document.getElementById('button-login');
let campEmail = document.getElementById('user-email-phone');

btnEntrar.addEventListener('click', function () {
  alert(campEmail.value);
})