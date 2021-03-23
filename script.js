const inputEmailPhone = document.getElementById('user-email-phone');
const buttonGetIn = document.getElementById('button-login');

function buttonIn() {
  alert(inputEmailPhone.value);
}

buttonGetIn.addEventListener('click', buttonIn);

// https://www.w3schools.com/js/js_validation.asp
// function validateForm() {
//   var x = document.forms["Form"]["firstname"].value;
//   if (x === "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }
