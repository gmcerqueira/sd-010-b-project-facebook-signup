document.getElementById('button-login').addEventListener('click', () => {
  alert(document.getElementById('user-email-phone').value);
});

const getTextInput = document.getElementsByClassName('inputForm');
const formButton = document.getElementById('facebook-register');
const textCamp = document.getElementById('divId');
const optionalGender = document.createElement('input');
function validateText() {
  let emptyInput = false;
  for (let x = 0; x < getTextInput.length; x += 1) {
    if (getTextInput[x].value === '') {
      emptyInput = true;
    }
  }
  return emptyInput;
}

formButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (validateText()) {
    document.getElementById('erro').innerText = 'Campos inválidos';
  }
});

function createCamp() {
  textCamp.appendChild(optionalGender);
  optionalGender.name = 'gender-custom';
  optionalGender.placeholder = 'Gênero (opcional)';
}

document.getElementById('personal').addEventListener('click', () => {
  createCamp();
});
