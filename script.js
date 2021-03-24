const buttomLogin = document.getElementById('button-login');
buttomLogin.addEventListener('click', () => {
  const loginValue = document.getElementById('user-email-phone-label');
  if (loginValue.value !== '') {
    alert(loginValue.value);
  }
});