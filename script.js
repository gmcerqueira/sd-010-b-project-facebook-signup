const longinButton = document.getElementById('button-login');

longinButton.addEventListener('click', () => {
  const inputName = document.getElementById('user-email-phone').value;
  if (inputName) {
    alert(inputName);
  }
});

function createPersonal() {
  const ocultedClass = document.querySelector('.oculta');
  ocultedClass.classList.remove('oculta');
}

const personalizado = document.getElementById('pers');
personalizado.addEventListener('click', createPersonal);

function removePersonal() {
  const ocultedClass = document.querySelector('.standby');
  ocultedClass.classList.add('oculta');
}
const masc = document.getElementById('masc');
masc.addEventListener('click', removePersonal);
const fem = document.getElementById('fem');
fem.addEventListener('click', removePersonal);

function selectedGender(event) {
  const selected = document.querySelector('.selected');
  event.target.classList.add('selected');
  if (selected) selected.classList.remove('selected');
}

masc.addEventListener('click', selectedGender);
fem.addEventListener('click', selectedGender);
personalizado.addEventListener('click', selectedGender);

// Para transformar objeto em array, utilizamos como referência este site: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values

function printtext() {
  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = '';
  const createUl = document.createElement('ul');
  rightContent.appendChild(createUl);
  const recoverdInfo = JSON.parse(localStorage.formPreenchido);
  createUl.innerText = `Olá, ${recoverdInfo.first} ${recoverdInfo.last}`;
  const arrayOfInfos = Object.values(recoverdInfo);
  for (let index = 3; index < arrayOfInfos.length; index += 1) {
    const selectUl = document.querySelector('ul');
    const createLi = document.createElement('li');
    createLi.innerText = arrayOfInfos[index];
    selectUl.appendChild(createLi);
  }
}

// Referêcia utilizada para realizar o requisito 20: https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage //

function guardaFormulario() {
  const formPreenchido = {
    first: document.querySelector('.firstname').value,
    last: document.querySelector('.lastname').value,
    password: document.querySelector('#password').value,
    mail: document.querySelector('.phone_email').value,
    birthDate: document.getElementById('birthdate').value,
    gender: document.querySelector('.selected').value,
  };
  localStorage.setItem('formPreenchido', JSON.stringify(formPreenchido));
  printtext();
}

const btnCadastro = document.querySelector('#facebook-register');
btnCadastro.addEventListener('click', guardaFormulario);
