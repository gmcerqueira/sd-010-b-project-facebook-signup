const buttonLogin = document.getElementById('button-login');
const emailValue = document.getElementById('user-email-phone');
const fm = document.querySelector('#f');
const mm = document.getElementById('m');
let count = 0;

buttonLogin.addEventListener('click', () => {
  alert(emailValue.value);
});

function testaRadio() {
  if (fm.checked) {
    localStorage.gender = 'Feminino';
  } else if (mm.checked) {
    localStorage.gender = 'Masculino';
  } else {
    localStorage.gender = 'Personalizado';
  }
}

function secondRightContent() {
  const containerRC = document.querySelector('.right-content');
  const saveName = (document.getElementById('firt-name').value);
  const saveLastName = (document.getElementById('lastName').value);
  const saveDate = (document.getElementById('date').value);
  const saveEmail = (document.getElementById('email').value);
  localStorage.name = saveName;
  localStorage.lastName = saveLastName;
  localStorage.email = saveEmail;
  localStorage.date = saveDate;
  const creatP = document.createElement('p');
  creatP.innerText = `Olá, ${localStorage.name} ${localStorage.lastName}
  E-mail: ${localStorage.email}
  Data: ${localStorage.date}
  Genero: ${localStorage.gender}`;
  containerRC.innerHTML = '';
  containerRC.appendChild(creatP);
  testaRadio();
}

function verifyInputs() {
  const registerButton = document.getElementById('facebook-register');
  const inputs = document.querySelectorAll('.right-content input');
  const errorMesage = document.getElementById('invalid-field');

  registerButton.addEventListener('click', (e) => {
    for (let i = 0; i < inputs.length - 1; i += 1) {
      if (inputs[i].value === '' || inputs[i].value === ' ') {
        errorMesage.innerHTML = 'Campos inválidos';
        count += 1;
        e.preventDefault();
      }
    }
    if (count === 0) {
      secondRightContent();
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
