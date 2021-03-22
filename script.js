function loginAlert() {
  const emailPhone = document.getElementById('user-email-phone');
  alert(emailPhone.value);
}

window.onload = () => {
  const loginButton = document.getElementById('button-login');
  loginButton.addEventListener('click', loginAlert);
};
