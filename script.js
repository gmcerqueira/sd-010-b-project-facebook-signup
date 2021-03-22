const button = document.getElementById('button-login');
const textAlert = document.getElementById('user-email-phone');
button.addEventListener('click', () => {
  alert(textAlert.value);
});

const opcaoPersonalizada = document.getElementById('personalizado');
opcaoPersonalizada.addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
});
