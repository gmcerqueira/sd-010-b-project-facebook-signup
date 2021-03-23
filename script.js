const login = document.getElementById('button-login');

const message = document.getElementById('user-email-phone');

login.addEventListener('click',clickLogin);

function clickLogin() {
  alert(message.value);
}
