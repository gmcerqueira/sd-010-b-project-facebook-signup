const btnEntrar = document.getElementById('button-login');
const userLogin = document.getElementById('user-email-phone');

btnEntrar.addEventListener('click', () => {
  alert(userLogin.value);
});

const btnRegister = document.getElementById('facebook-register');
const inputArray = document.getElementById('name-password');
const inputs = inputArray.getElementsByTagName('input');
const form = document.getElementById('register');
const span = document.createElement('span');

btnRegister.addEventListener('click', (event) => {
  for (let i = 0; i < inputs.length; i++) {
    if(inputs[i].value === ''){
      event.preventDefault();
      inputs.value = '';
      span.innerHTML = 'Campos inválidos';
      form.append(span);
      // em desenvolvimento
    } else {
        continue;
    }
  }
});

const otherGender = document.getElementsByName('gender')[2];
if (otherGender.checked) {
  const creatInput = document.createElement('input');
  creatInput.type = 'text';
  creatInput.name = 'gender'
  // em desenvolvimento
}
