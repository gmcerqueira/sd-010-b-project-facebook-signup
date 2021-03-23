const form = document.querySelector('.form');
const erro = document.createElement('p');
  
const firstName = document.getElementById('first-name-form');
const lastName = document.getElementById('last-name-form');
const phoneEmail = document.getElementById('phone-email-form');
const password = document.getElementById('password-form');
const birthDay = document.getElementById('date-birthdate-form');
const otherInput = document.getElementById('other-input')
  
const genderOtherDiv = document.querySelector('.gender-other');
const radios = document.querySelectorAll('input[type=radio]');


function entrarFacebook() {
  const entrarBotao = document.getElementById('button-login');
  entrarBotao.addEventListener('click', () => {
    const emailCelular = document.getElementById('user-email-phone').value;
    alert(emailCelular);
  });
}
entrarFacebook();

function erroText() {
  erro.innerText = 'Campos Inválidos';
  erro.style.color = 'red';
}

const botaoCadastro = document.getElementById('facebook-register');
const rightContent = document.querySelector('.right-content')

botaoCadastro.addEventListener('click', (e) => {
  e.preventDefault();
  erro.innerText = ''
  validacao();
  
  const inputs = document.querySelectorAll('.form input')
  if (erro.innerText === '') {
    rightContent.innerHTML = '';
    for (let index = 0; index < inputs.length; index += 1) {
      if (inputs[index].type === 'radio') {
        if (!inputs[index].checked) {
          continue;
        }
        if (inputs[index].id === 'other') {
          continue
        }        
      }    
      const createPara = document.createElement('p')
      createPara.innerText = inputs[index].value;
      rightContent.appendChild(createPara) 
       
    }
  }
});

function validacao(){
  const validarInput = [firstName, lastName, phoneEmail, password, birthDay]
  for (let index = 0; index < validarInput.length; index += 1) {
    if (validarInput[index].value === '') {
      erroText();
    } 
  }
  form.appendChild(erro);
  const radioOther = document.querySelector('input[type=radio]:checked')
  if (radioOther.id === 'other' && otherInput.value === '') {   
    erroText();   
  } 
  form.appendChild(erro);
}

//  campo personalizar genero
radios.forEach((radio) => {
  radio.addEventListener('click', () => {
    if (radio.id === 'other') {
      genderOtherDiv.style.display = 'block';
    } else {
      genderOtherDiv.style.display = 'none';
    }
  });
});
