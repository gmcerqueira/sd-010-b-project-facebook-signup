const entrarButton = document.getElementById('button-login');

function alertMessage(evento) {
  evento.preventDefault();
  alert(document.getElementById('user-email-phone').value);
}

entrarButton.addEventListener('click', alertMessage);
