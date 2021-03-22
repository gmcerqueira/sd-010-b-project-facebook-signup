const btnLogin = document.getElementById('button-login');
const txtEmailtel = document.getElementById('user-email-phone');

function elertEmail() {
  alert(txtEmailtel.value);
}

btnLogin.addEventListener('click', elertEmail);

// const radioBtns = document.getElementsByName('gender');

// for (let index = 0; index < radioBtns.length; index += 1) {
//     radioBtns[index].addEventListener('change', function () {
//         if (index == 2 && radioBtns[index].checked) {
//             document.getElementById('gender-custom').style.display = 'inline-block';
//         } else {
//             document.getElementById('gender-custom').style.display = 'none';
//         }
//     })
// }

function checkInputValues() {
  const inputs = document.getElementsByTagName('input');
  let emptyInput = 0;
  for (let i = 2; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      emptyInput += 1;
    }
  }
  return emptyInput;
}

function createAlert() {
  const form = document.getElementById('new-user');
  const alert = document.createElement('p');
  alert.innerText = 'Campos inválidos';
  form.appendChild(alert);
}

const submitBtn = document.getElementById('facebook-register');
submitBtn.addEventListener('click', () => {
  if (checkInputValues() > 0) {
    createAlert();
  }
});
