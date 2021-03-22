let numberOfInvalidRadios = 0;

function validateRadioButtons(input) {
  if (input === false) {
    numberOfInvalidRadios += 1;
  }
}

function createNewParagraph() {
  const paragraph = document.createElement('p');
  paragraph.style.color = 'red';
  paragraph.classList += 'invalid';
  paragraph.innerText = 'Campos inválidos';
  return paragraph;
}

function validateForm() {
  const parent = document.querySelector('.main-form');
  const inputs = document.querySelectorAll('input');
  const paragraph = createNewParagraph();
  if (document.querySelector('.invalid')){
    parent.removeChild(document.querySelector('.invalid'));
  }
  for (let index = 2; index < inputs.length; index += 1) {
    if (!inputs[index].value) {
      parent.appendChild(paragraph);
      return false;
    }
    if (inputs[index].type === 'radio'){
      validateRadioButtons(inputs[index].checked);
    }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createGenderInput() {
  const parent = document.getElementById('personalizedGender');
  const input = document.createElement('input');
  input.id = 'genderCustomText';
  input.type = 'text';
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
  parent.appendChild(input);
}

document.getElementById('facebook-register').addEventListener('click',
  (event) => {
    event.preventDefault();
    validateForm();
    if (validateForm()) {
      removeAllChildNodes(document.querySelector('.left-content'));
    }
  });

document.querySelectorAll('input[name="gender"]').forEach((elem) => {
  console.log(elem);
  elem.addEventListener('change', (event) => {
    const inputValue = event.target.value;
    const textBox = document.getElementById('genderCustomText');
    if (inputValue === 'Personalizado' && !textBox) {
      createGenderInput();
    }
  });
});

//alert no botão Entrar

/* let buttonEnter=getElementById('button-login');
buttonEnter.addEventListener('click',showAlert)
function showAlert(){
  alert(document.getElementById('user-email-phone').value()
} */
