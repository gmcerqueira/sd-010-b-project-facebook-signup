// elements

const btnLogin = document.querySelector('#button-login');
const inputEmail = document.querySelector('#user-email-phone');
const loginForm = document.querySelector('.login-form');
const inputs = loginForm.getElementsByTagName('input');
const btnRegister = document.querySelector('#facebook-register');
const btnPersonalizado = document.querySelector('.Personalizado');
const register = document.querySelector('.register');
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

const generateCustom = () => {
  const element = document.createElement('input');
  element.type = 'text';
  element.placeholder = 'Gênero (opcional)';
  element.name = 'gender-custom';
  element.className = 'Personalizado';
  element.id = 'person';

  loginForm.appendChild(element);
  loginForm.insertBefore(element, register);

  btnPersonalizado.removeEventListener('click', generateCustom);
};

btnPersonalizado.addEventListener('click', generateCustom);
