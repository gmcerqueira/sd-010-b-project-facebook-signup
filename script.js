function validateLogin() {
  const btnValidateLogin = document.getElementById('button-login');
  btnValidateLogin.addEventListener('click', (e) => {
    const userEmailPhone = document.getElementById('user-email-phone');

    alert(userEmailPhone.value);
    e.preventDefault();
  });
}

function newGenreInput() {
}

validateLogin();
newGenreInput();
