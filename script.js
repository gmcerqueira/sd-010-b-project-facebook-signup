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
