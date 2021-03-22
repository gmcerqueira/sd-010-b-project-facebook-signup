const btnLogin = document.getElementById('button-login');
const txtEmailtel = document.getElementById('user-email-phone');

let selectedGender;

function elertEmail() {
  alert(txtEmailtel.value);
}

btnLogin.addEventListener('click', elertEmail);

function switchGenderCustom(origin) {
  const element = origin.target.id;
  if (element === 'other') {
    document.getElementById('gender-custom').style.display = 'inline';
    selectedGender = 'Personalizado';
  } else if (element === 'female') {
    document.getElementById('gender-custom').style.display = 'none';
    selectedGender = 'Feminino';
  } else if (element === 'male') {
    document.getElementById('gender-custom').style.display = 'none';
    selectedGender = 'Masculino';
  }
  console.log(selectedGender);
  return selectedGender;
}

const radioBtns = document.getElementsByName('gender');

for (let index = 0; index < radioBtns.length; index += 1) {
  radioBtns[index].addEventListener('change', switchGenderCustom);
}

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

// function customizeRightContent () {
//   const rightContent = document.querySelector('.right-content');
//   rightContent.innerHTML = '';
//   const customH3 = document.createElement('h3');
  
//   customH3.innerText = 'teste';
//   rightContent.appendChild(customH3);
// }

const submitBtn = document.getElementById('facebook-register');
submitBtn.addEventListener('click', () => {
  if (checkInputValues() > 2) {
    const alert = document.getElementById('alert');
    alert.innerText = 'Campos inválidos';
  }
  // else {
  //   customizeRightContent();
  // }
});

function returnFalse() {
  return false;
}

returnFalse();
