// Requisito 7
function entrar() {
  const btnentrar = document.getElementById('button-login');
  const email = document.getElementById('user-email-phone');
  function alertemail() {
    alert(email.value);
  }
  btnentrar.addEventListener('click', alertemail);
}

entrar();

// Requisito 18
let missingData = false;

function filledfields() {
  missingData = false;
  const form = document.getElementById('subscription');
  const input = form.getElementsByTagName('input');
  for (let index = 0; index < input.length; index += 1) {
    if (index < 5 && input[index].value === '') {
      missingData = true;
      break;
    }
  }
}

function filledradios() {
  const form = document.getElementById('subscription');
  const input = form.getElementsByTagName('input');
  if (!(input[5].checked) && !(input[6].checked) && !(input[7].checked)) {
    missingData = true;
  }
}

function alertmissing() {
  filledfields();
  filledradios();
  if (missingData === true) {
    alert('Campos inválidos');
  }
}

function checkfilled() {
  const btnsumit = document.getElementsByClassName('btnSumit')[0];
  btnsumit.addEventListener('click', alertmissing);
}

checkfilled();

// Requisito 19
function createInputGenrer() {
  const localGenderPersonal = document.querySelector('.genderPersonal');
  const radioPersonal = document.querySelector('#personalizado');
  radioPersonal.addEventListener('click', () => {
    if (!document.querySelector('#inputP')) {
      const inputPersonal = document.createElement('input');
      inputPersonal.placeholder = 'Gênero (opcional)';
      inputPersonal.type = 'text';
      inputPersonal.id = 'inputP';
      inputPersonal.name = 'gender-custom';
      localGenderPersonal.appendChild(inputPersonal);
    }
  });
}

createInputGenrer();

// Requisito 19 - Adicional -- Remove input gênero personalizado caso clicado em Masculino / Feminino
function removeInputGenrer() {
  const radioMasc = document.querySelector('#masculino');
  radioMasc.addEventListener('click', () => {
    const inputPCreated = document.querySelector('#inputP');
    if (inputPCreated) { inputPCreated.remove(); }
  });
  const radioFem = document.querySelector('#feminino');
  radioFem.addEventListener('click', () => {
    const inputPCreated = document.querySelector('#inputP');
    if (inputPCreated) { inputPCreated.remove(); }
  });
}

removeInputGenrer();
