const botaoEntrar = document.getElementById('button-login');
function alertaEmailOuTelefone() {
  const emailOuTelefone = document.getElementById('user-email-phone').value;
  alert(emailOuTelefone);
}
botaoEntrar.addEventListener('click', alertaEmailOuTelefone);
// Reserva para refatorar o código do requisito 18=  let inputsCadastro = document.querySelectorAll(".cadastro input");
const botaoCadastrar = document.getElementById('facebook-register');
function validaInput() {
  const inputs = document.querySelectorAll('.cad');
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      alert('Campos inválidos');
      inputs[i].focus();
      return inputs[i];
    }
  }
}
function validaRadioButton() {
  const gender = document.getElementsByClassName('radio-button');
  let opcoesSemCheck = 0;
  for (let i = 0; i < gender.length; i += 1) {
    if (gender[i].checked === false) {
      opcoesSemCheck += 1;
    }
  }
  if (opcoesSemCheck === 3) {
    alert('Campos inválidos');
  }
}

function valida() {
  validaInput();
  validaRadioButton();
}
botaoCadastrar.addEventListener('click', valida);