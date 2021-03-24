// Importa os input's da área gênero do form de cadastro
const genderCustom = document.getElementById('gender-custom');
const genderPer = document.getElementById('gender-per');
const genderMasc = document.getElementById('gender-masc');
const genderFem = document.getElementById('gender-fem');

// cria um alert com o valor digitado no input email ou telefone
function btnLogin() {
  const btnEnviar = document.querySelector('#button-login');
  const alertText = document.querySelector('#user-email-phone');

  btnEnviar.addEventListener('click', () => {
    alert(alertText.value);
  });
}

// habilita o input de "Gênero (opcional)"
function outroGenreno() {
  genderCustom.style.display = 'none';

  genderPer.addEventListener('click', () => {
    genderCustom.style.display = 'block';
  });

  genderFem.addEventListener('click', () => {
    genderCustom.style.display = 'none';
  });

  genderMasc.addEventListener('click', () => {
    genderCustom.style.display = 'none';
  });
}

btnLogin();
outroGenreno();

const btnCadastrase = document.querySelector('#facebook-register');

function verificaInputs() {
  const inputs = document.querySelectorAll('.input');
  let validacaoInput = true;
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      validacaoInput = false;
    }
  }
  return validacaoInput;
}

function verificaRadios() {
  const radios = document.querySelectorAll('.gender-radio');
  let validacaoRadios = false;
  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].checked) {
      validacaoRadios = true;
    }
  }
  return validacaoRadios;
}

function cadastroVerificacao() {
  const validacao = document.querySelector('#validacao');
  const resultado = document.createElement('div');
  resultado.setAttribute('class', 'resultado');
  let ativacao = true;
  if (!verificaInputs() || !verificaRadios()) {
    resultado.innerText = 'Campos inválidos';
    validacao.appendChild(resultado);
    ativacao = false;
  }
  return ativacao;
}

function opicaoRadio() {
  const radios = document.querySelectorAll('.gender-radio');
  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].checked === true) {
      return radios[index].value;
    }
  }
}

btnCadastrase.addEventListener('click', (event) => {
  event.preventDefault();
  const inputs = document.querySelectorAll('.input');
  const conteudo = document.querySelector('.right-content')
  if (cadastroVerificacao()) {
    conteudo.innerHTML = `Olá, ${inputs[0].value} ${inputs[1].value}, 
    email/telefone: ${inputs[2].value}, 
    data nascimento: ${inputs[3].value}
    genero: ${opicaoRadio()}`
    
  }
});
