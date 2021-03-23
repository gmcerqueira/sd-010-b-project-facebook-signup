const consButton = document.querySelector('#button-login');

consButton.addEventListener('click', () => {
  const aux = document.querySelector('#user-email-phone').value;
  alert(aux);
});
