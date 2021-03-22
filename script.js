const btnEntrar = document.getElementById('button-login');
const campEmail = document.getElementById('user-email-phone');

btnEntrar.addEventListener('click', function () {
  alert(campEmail.value);
});
