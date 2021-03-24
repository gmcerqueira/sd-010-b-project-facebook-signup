// Criamos a função que alerta o valor do campo Email ou Telefone e a atrelamos ao evento do botão de entrar ser clicado.

function alertaEmailOuTelefone() {
  const emailOuTelefone = document.getElementById('user-email-phone').value;
  alert(emailOuTelefone);
}

const botaoEntrar = document.getElementById('button-login');
botaoEntrar.addEventListener('click', alertaEmailOuTelefone);

// Atribuimos uma váriavel ao elemento <p></p> que receberá o texto "campo inválido" caso algum campo do formulário não esteja preenchido.

const textoCamposInvalidos = document.getElementById('campos-invalidos');

function validaInput() {
  const inputs = document.querySelectorAll('.cad');
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      return true;
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
    return true;
  }
}

// Se algum campo não estiver preenchido paramos a ação padrão do botão de cadastrar e mostrarmos a mensagem "Campos invalidos".

function valida(event) {
  if (validaInput() === true || validaRadioButton() === true) {
    event.preventDefault();
    textoCamposInvalidos.innerHTML = 'Campos invalidos';
  }
}

const botaoCadastrar = document.getElementById('facebook-register');
botaoCadastrar.addEventListener('click', valida);
