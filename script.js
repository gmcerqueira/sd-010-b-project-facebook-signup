const buttonId = document.getElementById('button-login');

buttonId.addEventListener('click', () => {
  const valueFirst = document.getElementById('user-email-phone').value;
  alert(valueFirst);
});
