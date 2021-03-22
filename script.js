const email = document.getElementById('user-email-phone');
const buttonLogin = document.getElementById('button-login');
// const rightContent = document.querySelector(
//   'body > main > div > div.right-content',
// );
// const registerButton = document.getElementById('facebook-register');
// const forms = do
const inputGender1 = document.querySelector(
  '.form-group-row > input[type=radio]:nth-child(1)',
);
const inputGender2 = document.querySelector(
  '.form-group-row > input[type=radio]:nth-child(2)',
);
const inputGender3 = document.querySelector(
  '.form-group-row > input[type=radio]:nth-child(3)',
);
const inputGender4 = document.querySelector(
  'body > main > div > div.right-content > form > div:nth-child(4) > input',
);
/* ----------------------------------------------------------------------------- */

const getEmailValue = () => alert(email.value);
const genderAdd = () => inputGender4.classList.remove('disable');
const genderRemove = () => inputGender4.classList.add('disable');
// const insertInput = () => {

// }


buttonLogin.addEventListener('click', getEmailValue);
inputGender1.addEventListener('click', genderRemove);
inputGender2.addEventListener('click', genderRemove);
inputGender3.addEventListener('click', genderAdd);
// registerButton.addEventListener('click, ')
