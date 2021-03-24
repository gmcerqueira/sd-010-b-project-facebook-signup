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
      if (inputs[i].value === '' || inputs[i].value === ' ') {
        errorMesage.innerHTML = 'Campos inválidos';
        e.preventDefault();
      }
    }
  });
}

verifyInputs();

function personalizedGender() {
  const customGender = document.querySelectorAll('input[name="gender"]');
  const inputGenderCustom = document.querySelector('.gender-custom');

  for (let i = 0; i < customGender.length; i += 1) {
    customGender[i].addEventListener('click', () => {
      if (customGender[i].value === 'Personalizado') {
        inputGenderCustom.style.display = 'block';
      } else {
        inputGenderCustom.style.display = 'none';
      }
    });
  }
}

personalizedGender();
