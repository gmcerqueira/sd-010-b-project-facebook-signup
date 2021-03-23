const login = document.getElementById('button-login');

const message = document.getElementById('user-email-phone');

function clickLogin() {
  alert(message.value);
}

login.addEventListener('click', clickLogin);
