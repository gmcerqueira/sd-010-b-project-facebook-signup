const btnLogin = document.getElementById('button-login');
const inputEmailTel = document.querySelector('#user-email-phone');
const inputPassword = document.querySelector('#user-password');

function alertLogin() {
  if ((inputEmailTel.value !== '') && (inputPassword.value !== '')) {
    alert(inputEmailTel.value);
  }
}

btnLogin.addEventListener('click', alertLogin);

// function validateData(data) {
//   if (data.indexOf('/') === 2 || data.indexOf('/') === 5 ) {
//     const day = data.substr(0, 2);
//     const month = data.substr(3, 2);
//     const year = data.substr(6, 4);
//     if ((day > 0 && day <= 31) && (month > 0 && month <= 12) && (year >= 0 && year < year.length === 4 )) {
//       return true;
//     }
//   }
//   return false;
// }
// function checkData() {
//   const inputData = document.querySelector('#birthdate');
//   let data = inputData.value;
//   alert(data);
//   const userData = validateData(data);
//   if(!userData) {
//     inputData.value = '';
//     return false;
//   }
//   return true;
// }

const buttonRegister = document.querySelector('#facebook-register');
// buttonRegister.addEventListener('click', checkData);

function validar() {
  const validInfoElem = document.querySelectorAll('.validInfo');
  let valor;
  for (let index = 0; index < validInfoElem.length; index += 1) {
    if (validInfoElem[index].value === '') {
      valor = false;
    } else valor = true;
  }
  return valor;
}

buttonRegister.addEventListener('click', () => {
  // validar();
  // checkData();
  if (!validar()) {
    alert('Campos inválidos');
  }
});

const newGenderElem = document.getElementById('form-container');
const newGenderInput = document.createElement('input');
const genderRadio = document.getElementById('generico');

genderRadio.addEventListener('click', () => {
  newGenderElem.appendChild(newGenderInput);
  newGenderInput.setAttribute('type', 'text');
  newGenderInput.setAttribute('name', 'gender-custom');
  newGenderInput.setAttribute('placeholder', 'Gênero (opcional)');
});
