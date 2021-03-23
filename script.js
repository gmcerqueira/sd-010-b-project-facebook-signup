const radio = document.querySelectorAll('.user-gender input');
const dataEl = document.querySelector('.data');
const signIn = document.querySelector('#button-login');
const submitBtn = document.getElementById('facebook-register');
const initialEl = document.querySelector('.initial');
const inputList = document.querySelectorAll('#register-form input');

function createEl(tagName) {
  const element = document.createElement(tagName);
  return element;
}

function getAttributes(array) {
  function removePassword(e) {
    const el = e.type !== 'password';
    return el;
  }
  function removeGender(e) {
    const rad = e.type !== 'radio' || e.checked !== false;
    return rad;
  }

  const arr = [...array].filter(removePassword).filter(removeGender);
  return arr;
}

function showFields() {
  const dataList = getAttributes(inputList);
  const greetings = `Olá ${dataList[0].value} ${dataList[1].value}`;
  const boldText = createEl('span');
  dataEl.appendChild(boldText);
  boldText.classList.add('bold-text');
  boldText.innerText = `${greetings}`;
  dataList.forEach((el) => {
    const data = `${el.name}: ${el.value}`;
    const div = createEl('div');
    div.textContent = data;
    dataEl.appendChild(div);
  });
  initialEl.style.display = 'none';
}

function validateDate() {
  const dataStr = inputList[4].value;
  const dataArr = dataStr.split('/');
  const d = parseInt(dataArr[0], 10);
  const m = parseInt(dataArr[1], 10);
  const y = parseInt(dataArr[2], 10);
  const bool = (d > 0 && d <= 31) && (m > 0 && m <= 12) && (y > 0);

  return bool;
}

function validateForm(event) {
  event.preventDefault();
  const genCheck = (radio[0].checked || radio[1].checked) || radio[2].checked;
  let count = 0;

  inputList.forEach((el) => {
    if (el.value === '') {
      count += 1;
    }
  });
  const booleans = [(count <= 3), genCheck, validateDate()];

  if (booleans.every((el) => el === true)) { showFields(); } else {
    document.querySelector('.required').innerText = 'Campos inválidos';
  }
}

function alert1() {
  const login = document.getElementById('user-email-phone').value;
  alert(login);
}

function load() {
  signIn.addEventListener('click', alert1);
  submitBtn.addEventListener('click', validateForm);
}

window.onload = function start() {
  load();
};
