const btnEntrar = document.getElementById ('button-login');
const userLogin = document.getElementById ('user-email-phone');

btnEntrar.addEventListener ('click', () => {
  alert(userLogin.value);
})