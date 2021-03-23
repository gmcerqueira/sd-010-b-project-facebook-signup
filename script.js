const consButton = document.querySelector('#button-login');
const consButtonRegis = document.querySelector('#facebook-register');
const body = document.querySelector('.right-content');

consButton.addEventListener('click', () => {
  const aux = document.querySelector('#user-email-phone').value;
  alert(aux);
});

consButtonRegis.addEventListener('click', () => {
  const auxP = document.createElement('p');
  const constValidar = document.querySelector('.input-text').value;
  console.log(constValidar);
  auxP.innerText = constValidar;
  body.appendChild(auxP);
});
