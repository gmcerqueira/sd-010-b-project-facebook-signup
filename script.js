const buttonId = document.getElementById('button-login');

buttonId.addEventListener('click', () => {
  const valueFirst = document.getElementById('user-email-phone').value;
  alert(valueFirst);
});

// Estava com dificuldade para passar no Lint, pois sempre ficava apontando uma função inesperada. Depois de olhar alguns códigos de alguns colegos utilizei o => ao invés da função e o Lint aceitou.

const facebookRegister = document.querySelector('#facebook-register');
const facebookForm = document.querySelector('.facebook-form');
const inputsForm = facebookForm.getElementsByTagName('input');

function checkFirst() {
  let first;
  for (let index = 0; index <= 4; index += 1) {
    if (inputsForm[index].value === '') {
      first = true;
      break;
    } else {
      first = false;
    }
  }
  return first;
}

function checkSecond() {
  let second = false;
  const five = inputsForm[5].checked;
  const six = inputsForm[6].checked;
  const seven = inputsForm[7].checked;
  const checked = [five, six, seven];
  for (let index = 0; index < checked.length; index += 1) {
    if (checked[index] === false) {
      second = true;
    } else {
      second = false;
      break;
    }
  }
  return second;
}

function newP() {
  let newPar = document.createElement('p');
  newPar.innerText = 'Campos inválidos';
  document.querySelector('.facebook-form').appendChild(newPar);
}

facebookRegister.addEventListener('click', () => {
  checkFirst();
  checkSecond();
  if (checkFirst() === true || checkSecond() === true) {
    newP()    
  }
});
