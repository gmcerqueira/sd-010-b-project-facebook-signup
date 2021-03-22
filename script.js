const btnLogin = document.getElementById('button-login');
const txtEmailtel = document.getElementById('user-email-phone');

function elertEmail() {
  alert(txtEmailtel.value);
}

btnLogin.addEventListener('click', elertEmail);
