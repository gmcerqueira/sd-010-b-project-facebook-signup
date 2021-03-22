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

masc.addEventListener('click', selectedGender);
fem.addEventListener('click', selectedGender);
personalizado.addEventListener('click', selectedGender);

function selectedGender(event) {
  const selected = document.querySelector('.selected');
  event.target.classList.add('selected');
  if (selected) selected.classList.remove('selected');
}

function guardaFormulario() {
  const formPreenchido = {};
  formPreenchido.firstName = document.querySelector('.firstname').value;
  formPreenchido.lastName = document.querySelector('.lastname').value;
  formPreenchido.mail = document.querySelector('.phone_email').value;
  formPreenchido.birthDate = document.getElementById('birthdate').value;
  formPreenchido.gender = document.querySelector('.selected').value;
  localStorage.setItem('formPreenchido', JSON.stringify(formPreenchido));
  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = '';
  const paragraph = document.createElement('p');
  paragraph.id = 'paragraph';
  rightContent.appendChild(paragraph);
  const recoverdInfo = JSON.parse(localStorage.formPreenchido);
paragraph.innerText = ` Olá, ${recoverdInfo.firstName} ${recoverdInfo.lastName}.\n Recebemos o teu cadastro com sucesso!\n Confira os seus dados: \n\n E-mail/Telefone: ${recoverdInfo.mail} \n Data de Nascimento: ${recoverdInfo.birthDate} \n Gênero: ${recoverdInfo.gender}`
}

const btnCadastro = document.querySelector('#facebook-register');
btnCadastro.addEventListener('click', guardaFormulario);
