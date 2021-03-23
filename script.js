const buttonLogin = document.getElementById('button-login');
const emailValue = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', () => {
  alert(emailValue.value);
});

function verifyInputs() {
  const registerButton = document.getElementById('facebook-register');
  const inputs = document.querySelectorAll('.right-content input');
  const errorMesage = document.getElementById('invalid-field');

  registerButton.addEventListener('click', (e) => {
    for (let i = 0; i < inputs.length; i += 1) {
      if (inputs[i].value === '') {
        errorMesage.innerHTML = 'Campos inválidos';
        e.preventDefault();
        // console.log(inputs);
      }
    }
  });
}

verifyInputs();
