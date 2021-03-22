const email = document.getElementById('user-email-phone');
const buttonLogin = document.getElementById('button-login');
const inputGender1 = document.querySelector(
  '#gender-options > input[type=radio]:nth-child(1)',
);
const inputGender2 = document.querySelector(
  '#gender-options > input[type=radio]:nth-child(2)',
);
const inputGender3 = document.querySelector(
  '#gender-options > input[type=radio]:nth-child(3)',
);
const inputGender4 = document.querySelector(
  '#gender-options > input[type=text]:nth-child(4)',
);
/* ----------------------------------------------------------------------------- */

const getEmailValue = () => alert(email.value);
const genderAdd = () => inputGender4.classList.remove('disable');
const genderRemove = () => inputGender4.classList.add('disable');

buttonLogin.addEventListener('click', getEmailValue);
inputGender1.addEventListener('click', genderRemove);
inputGender2.addEventListener('click', genderRemove);
inputGender3.addEventListener('click', genderAdd);
