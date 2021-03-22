function entrarFacebook() {
  const entrarBotao = document.getElementById('button-login');
  entrarBotao.addEventListener('click', () => {
    const emailCelular = document.getElementById('user-email-phone').value;
    alert(emailCelular);
  });
}
entrarFacebook();

function substituiConteudo() {
  const botaoCadastro = document.getElementById('facebook-register');
  botaoCadastro.addEventListener('click', () => {
    const getPrimeiroNome = document.getElementById('first-name-form').value;
    const getUltimoNome = document.getElementById('last-name-form').value;
    const NomeCompleto = document.createElement('h2');
    NomeCompleto.innerText = `Olá, ${getPrimeiroNome} ${getUltimoNome};`    
    const getEmailCelular = document.getElementById('phone-email-form').value;
    const emailCelular = document.createElement('p');
    emailCelular.innerText = getEmailCelular;    
    const getDataNascimento = document.getElementById('date-birthdate-form').value;
    const dataNascimento = document.createElement('p');
    dataNascimento.innerText = getDataNascimento;    
    const opcaoGenero = document.createElement('p');
    opcaoGenero.innerText = document.querySelector('input[type="radio"]:checked').value;
    const formDireita = document.querySelector('.right-content');
    formDireita.innerHTML = '';
    formDireita.appendChild(NomeCompleto);
    formDireita.appendChild(emailCelular);
    formDireita.appendChild(dataNascimento);
    formDireita.appendChild(opcaoGenero);
  });
}
substituiConteudo();
// Validando campos
const inputText = document.querySelectorAll('.form input[type=text');
const registerBtn = document.getElementById('facebook-register');

registerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const form = document.querySelector('.form');
  const erro = document.createElement('p');
  erro.innerText = 'Campos inválidos';
  erro.style.color = 'red';
  for (let index = 0; index < inputText.length; index += 1) {
		if (inputText[index].value === '') {
      form.appendChild(erro);
    }
  }
});
//  campo personalizar genero
const genderOtherDiv = document.querySelector('.gender-other');
const radios = document.querySelectorAll('input[type=radio]');
radios.forEach((radio) => {
  radio.addEventListener('click', () => {
    if (radio.id === 'other') {
      genderOtherDiv.style.display = 'block';
		} else {
      genderOtherDiv.style.display = 'none';
    }
  });
});
