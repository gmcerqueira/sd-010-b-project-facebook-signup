const buttonLogin = document.querySelector('#button-login');

buttonLogin.addEventListener('click', () => {
  alert(document.querySelector("#user-email-phone").value);
});

const buttonCadastre = document.querySelector('#facebook-register');

buttonCadastre.addEventListener('click', () => {
  const firstName = document.querySelector('#firstName');
  const lastName = document.querySelector('#lastName');
  const email = document.querySelector('#phoneEmail');
  const password = document.querySelector('#password');
  const birthdate = document.querySelector('#birthdate');

  // alert(`${firstName.value}+${lastName.value}+${email.value}+${password.value}+${birthdate.value}`);

  if((firstName.value == "")||(lastName.value == "")||(email.value == "")||(password.value == "")||(birthdate.value == "")){
    alert('Campos inválidos');
  }

  // function genderCuston ()

});

// function genderCuston() {

// }