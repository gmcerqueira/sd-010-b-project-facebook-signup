const btnLogin = document.getElementById('button-login');
const inputEmailTel = document.querySelector('#user-email-phone');
const inputPassword = document.querySelector('#user-password');

function alertLogin() {
  if ((inputEmailTel.value !== '') && (inputPassword.value !== '')) {
    alert(inputEmailTel.value);
  }
}

btnLogin.addEventListener('click', alertLogin);

// const genderPersonalize = document.querySelector('#gender-personalize');

// function validateData(data) {
//   if (data.indexOf('/') === 2 || data.indexOf('/') === 5 ) {
//     const day = data.substr(0,2);
//     const month = data.substr(3,2);
//     const year = data.substr(6,4);
//     if ((day > 0 && day <= 31) && (month > 0 && month <=12) && (year >=0 && year < year.length === 4 )) {
//       return true;
//     }
//   }
//   return false;
// }

// function checkData () {
//   const inputData = document.querySelector('#birthdate');
//   let data = inputData.value;
//   const userData = validateData(data);
//   alert(inputData.value);
//   if(!userData && data.length) {
//     alert('data invalida!');
//     inputData.value = '';
//     return false;
//   }
//   return userData;
// }

// const buttonRegister= document.querySelector('#facebook-register');
// buttonRegister.addEventListener('click', checkData);

const newGenderElem = document.getElementById('label-gender');
const newGenderInput = document.createElement('input');
const genderRadio = document.getElementById('generico');

genderRadio.addEventListener('click', () => {
  newGenderElem.appendChild(newGenderInput);
  newGenderInput.setAttribute('type', 'text');
  newGenderInput.setAttribute('name', 'gender-custom');
  newGenderInput.setAttribute('placeholder', 'Gênero (opcional)');
});
