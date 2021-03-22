const loginBtn = document.querySelector('#button-login');
const user = document.querySelector('#user-email-phone');

loginBtn.addEventListener('click', () => {
  user.value ? alert(user.value) : alert('Usuário deve ser preenchido');
});
