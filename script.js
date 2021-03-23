// function createNewParagraph() {
//   const paragraph = document.createElement('p');
//   paragraph.style.color = 'red';
//   paragraph.classList += 'invalid';
//   paragraph.innerText = 'Campos inválidos';
//   return paragraph;
// }

// function validateForm() {
//   const inputs = document.querySelectorAll('input');
//   const paragraph = createNewParagraph();
// }

// function removeAllChildNodes(parent) {
//   while (parent.firstChild) {
//     parent.removeChild(parent.firstChild);
//   }
// }

function createGenderInput() {
  console.log('recebido');
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
    // validateForm();
    // if (validateForm()) {
    //   removeAllChildNodes(document.querySelector('.left-content'));
    // }
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

let buttonEnter = document.getElementById('button-login');
function showAlert(event){
  event.preventDefault()
  alert(document.getElementById('user-email-phone').value);
}

buttonEnter.addEventListener('click', showAlert)