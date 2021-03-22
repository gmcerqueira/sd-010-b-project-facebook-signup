let signIn = document.querySelector('#button-login');

signIn.addEventListener('click', alert1);

function alert1 () {
  let login = document.getElementById('user-email-phone').value;
  alert(login);
}