const inputEmail = document.querySelector('#user-email-phone');
const btnEnviar = document.querySelector('#button-login');

function alertEmail() {
  alert(inputEmail.value);
}

btnEnviar.addEventListener('click', alertEmail);

// 18°
function teste() {
  const getFilho = document.querySelector('.formContato').children;
  for (let i = 1; i < getFilho.length; i += 1) {
    if (getFilho[i].value === '') {
      alert('Campos inválidos');
    }
  }
}
const getButton = document.getElementById('facebook-register');
getButton.addEventListener('click', teste);
// teste
// document.querySelector('form').oninvalid = function() {
//   // remove mensagens de erro padrão
//   this.setCustomValidity("");
//   // faz a validação novamente
//   if (!this.validity.valid) {
//       // se estiver inválido, coloca a mensagem
//       this.setCustomValidity("Nome está inválido!");
//    }
// };
