const btnLogin = document.getElementById('button-login');
const txtEmailtel = document.getElementById('email-tel');

function elertEmail() {
  alert(txtEmailtel.value);
}

btnLogin.addEventListener('click', elertEmail);
