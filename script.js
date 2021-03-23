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

function printtext() {
  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = '';
  const createH2 = document.createElement('h3');
  rightContent.appendChild(createH2);
  const recInfo = JSON.parse(localStorage.formPreenchido);
  const birth = `Data de Nascimento: ${recInfo.birthDate}`;
  const mail = `E-mail ou Telefone: ${recInfo.mail}`;
  const gender = `Gênero: ${recInfo.gender}`;
  const cool = 'Recebemos o teu cadastro com sucesso! Confira os seus dados:';
  const infoData = `\n ${cool}\n ${mail}\n ${birth}\n ${gender}`;
  createH2.innerText = `Olá, ${recInfo.first} ${recInfo.last}! ${infoData}`;
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
