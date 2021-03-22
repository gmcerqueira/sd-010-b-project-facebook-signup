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

// Referêcia utilizada para realizar o requisito 20: https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage //

// function printtext() {
//   const rightContent = document.querySelector('.right-content');
//   rightContent.innerHTML = '';
//   const paragraph = document.createElement('p');
//   paragraph.id = 'paragraph';
//   rightContent.appendChild(paragraph);
//   const recoverdInfo = JSON.parse(localStorage.formPreenchido);
//   paragraph.innerText = ` Olá, ${recoverdInfo.firstName} ${recoverdInfo.lastName}.\n Recebemos o teu cadastro com sucesso!\n Confira os seus dados: \n\n E-mail/Telefone: ${recoverdInfo.mail} \n Data de Nascimento: ${recoverdInfo.birthDate} \n Gênero: ${recoverdInfo.gender}`;
// }

function guardaFormulario() {
  const formPreenchido = {
    firstName: document.querySelector('.firstname').value,
    lastName: document.querySelector('.lastname').value,
    mail: document.querySelector('.phone_email').value,
    birthDate: document.getElementById('birthdate').value,
    gender: document.querySelector('.selected').value,
  };
  localStorage.setItem('formPreenchido', JSON.stringify(formPreenchido));
  // printtext();
}

const btnCadastro = document.querySelector('#facebook-register');
btnCadastro.addEventListener('click', guardaFormulario);
