const buttonLogin = document.querySelector('#button-login');

buttonLogin.addEventListener('click', () => {
  alert(document.querySelector('#user-email-phone').value);
});

const buttonCadastre = document.querySelector('#facebook-register');

function checaForm() {
  const inputsToCheck = document.querySelectorAll('.AbraConta .toCheck');

  for (let input = 0; input < inputsToCheck.length; input += 1) {
    console.log(input);
    if (inputsToCheck[input].value === '') {
      alert('Campos inválidos');
      break;
    }
  }
}

buttonCadastre.addEventListener('click', () => {
  checaForm();
});
