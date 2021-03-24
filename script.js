function alertButton() {
  const emailTel = document.getElementById('user-email-phone');
  alert(emailTel.value);
}
document.getElementById('button-login').addEventListener('click', alertButton);

function checks() {
  const verifica = document.querySelectorAll(':required');
  for (let i = 0; i < verifica.length; i += 1) {
    if (verifica[i].value === '') {
      const formInput = document.getElementById('campos');
      formInput.innerHTML = ' Campos inválidos';
      return false;
    }
  }
}
document.getElementById('facebook-register').addEventListener('click', checks);
