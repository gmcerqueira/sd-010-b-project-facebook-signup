const btnLogin = document.getElementById('button-login');
const txtEmailtel = document.getElementById('user-email-phone');

function elertEmail() {
  alert(txtEmailtel.value);
}

btnLogin.addEventListener('click', elertEmail);

function checkInputValues() {
  const inputs = document.getElementsByTagName('input');
  let emptyInput = 0;
  for (let i = 2; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      emptyInput += 1;
    }
  }
  return emptyInput;
}

const submitBtn = document.getElementById('facebook-register');
submitBtn.addEventListener('click', () => {
  if (checkInputValues() > 0) {
    alert('Campos inválidos');
  }
});
