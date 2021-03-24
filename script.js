const buttomLogin = document.getElementById('button-login');
const loginValue = document.getElementById('user-email-phone');
buttomLogin.addEventListener('click', () => {
    alert(loginValue.value);
});
