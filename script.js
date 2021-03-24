const buttomLogin = document.getElementById('button-login');
const EmailTel = document.querySelector('#user-email-phone');
const Password = document.querySelector('#user-password');

buttomLogin.addEventListener('click', () => {
  if ((EmailTel.value !== '') && (Password.value !== '')) {
    alert(EmailTel.value);
  }
});
