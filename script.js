const consButton = document.querySelector('#button-login');

function funAlert() {
  const aux = document.querySelector('#user-email-phone').value;
  alert(aux);
}

consButton.addEventListener('click', funAlert);
