// elements

const btnLogin = document.querySelector('#button-login');
const inputEmail = document.querySelector('#user-email-phone');
const loginForm = document.querySelector('.login-form');
const inputs = loginForm.getElementsByTagName('input');
const btnRegister = document.querySelector('#facebook-register');
const verify = document.querySelector('.verify')

btnLogin.addEventListener('click', () => {
  alert(inputEmail.value);
});


function validate () {
    for (i = 0; i < inputs.length; i += 1 ){
      if( inputs[i].value === '' || inputs.checked === false  ){
        verify.innerHTML = 'Campos inválidos';        
      }
    }
}


btnRegister.addEventListener('click', function(e){
  e.preventDefault();
   validate();
})
