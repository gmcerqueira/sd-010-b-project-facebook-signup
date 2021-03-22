const buttonLogin = document.querySelector('#button-login');

buttonLogin.addEventListener('click', () => {
  alert(document.querySelector('#user-email-phone').value);
});

const buttonCadastre = document.querySelector('#facebook-register');

function checaForm() {
  const inputsToCheck = document.querySelectorAll('.AbraConta .toCheck');
  const AbraContaForm = document.querySelector('.AbraConta');

  for (let input = 0; input < inputsToCheck.length; input += 1) {
    console.log(input);
    if (inputsToCheck[input].value === '') {
      const aviso = document.createElement('p');
      aviso.innerText = 'Campos inválidos';
      AbraContaForm.append(aviso);
      break;
    }
  }
}

buttonCadastre.addEventListener('click', (event) => {
  event.preventDefault();
  checaForm();
});

const genderSelect = document.querySelector('#genderSelect');
const radioPerson = document.querySelector('#pers');

radioPerson.addEventListener('click', () => {
  const inputPerson = document.createElement('input');
  inputPerson.id = 'Personalizado';
  inputPerson.name = 'gender-custom';
  inputPerson.placeholder = 'Gênero (opcional)';
  genderSelect.appendChild(inputPerson);
});
