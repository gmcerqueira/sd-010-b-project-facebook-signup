function addEventButton() {
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', () => {
    const inputValue = document.getElementById('user-email-phone').value;
    alert(inputValue);
  });
}
addEventButton();

// function checkInputs(event) {
//   event.preventDefault();
//   const inputsTexts = document.querySelectorAll('.form-cadastro input[type="text"]');
//   const inputPswd = document.querySelector('.form-cadastro input[type="password"]');
//   const formCadastro = document.querySelector('.form-cadastro');
//   const span = document.createElement('span');
//   for (let index = 0; index < inputsTexts.length; index += 1) {

//     if (inputsTexts[index].value === '' || inputPswd.value === '') {

//       span.classList.add('span');
//       formCadastro.appendChild(span).innerText = 'Campos inválidos';
//     }
//     if (document.getElementsByClassName('span')[1].classList.contains['span']) {
//       document.getElementsByClassName('span')[1].removeChild("span")[1]
//     }
//   }
 
// }
// const submitButton = document.getElementById('facebook-register');
// submitButton.addEventListener('click', checkInputs);