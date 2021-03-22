// elements

const btnLogin = document.querySelector('#button-login');
const inputEmail = document.querySelector('#user-email-phone');
const loginForm = document.querySelector('.login-form');
const inputs = loginForm.getElementsByTagName('input');
const btnRegister = document.querySelector('#facebook-register');
// const verify = document.querySelector('.verify');

btnLogin.addEventListener('click', () => {
  alert(inputEmail.value);
});

function validate() {
  let count = 0;
  for (let i = 0; i < inputs.length; i += 1) {
    const ipt = inputs[i];
    const value = ipt.type === 'radio' ? ipt.checked : ipt.value;
    if (value) {
      count += 1;
    }
  }
  return count >= 6;
}

btnRegister.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(validate());
});
