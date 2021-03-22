const button = document.getElementById('button-login');
const textAlert = document.getElementById('user-email-phone');
button.addEventListener('click', () => {
  alert(textAlert.value);
});
