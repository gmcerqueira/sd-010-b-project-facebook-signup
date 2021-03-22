const buttonLogin = document.getElementById('button-login');
const email = document.getElementById('user-email-phone');

const getEmailValue = () => alert(email.value);

buttonLogin.addEventListener('click', getEmailValue);