const consButton = document.querySelector('#button-login');
const consButtonRegis = document.querySelector('#facebook-register');
const body = document.querySelector('.right-content');

consButton.addEventListener('click', () => {
  const aux = document.querySelector('#user-email-phone').value;
  alert(aux);
});

consButtonRegis.addEventListener('click', () => {
  const auxP = document.createElement('p');
  const constValidar = document.querySelectorAll('.input-text').value;
  for (let index = 0; index < constValidar.length; index += 1) {
    if (constValidar[index].value === "") {
      constValidar[index].value = "Campos inválidos";
    }
  }
});
