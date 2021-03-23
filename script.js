const boxGenerGustom = document.getElementById('gener-custom');
const bulletOptional = document.getElementById('radio-three');
const bulletGener = document.getElementsByName('gender');
const inputGenerCustom = document.getElementById('input-gener-custom');
const bulletGender = document.getElementsByName('gender');

function checkErrosForm(arrInput) {
  let erros = 0;
  arrInput.forEach((e) => {
    if (e === '') {
      erros += 1;
    }
  });

  return erros;
}

function checkErroFormBullet(input) {
  let boolean = false;
  input.forEach((e) => {
    if (e.checked) {
      boolean = true;
    }
  });
  return boolean;
}

function getInputs() {
  const inpFName = document.getElementsByName('firstname')[0].value;
  const inpLName = document.getElementsByName('lastname')[0].value;
  const inpPEmail = document.getElementsByName('phone_email')[0].value;
  const inpPassword = document.getElementsByName('password')[0].value;
  const inpBirthdate = document.getElementsByName('birthdate')[0].value;
  const inputs = [inpFName, inpLName, inpPEmail, inpPassword, inpBirthdate];
  return inputs;
}

function outputError() {
  const outputErrorr = document.getElementById('outPutErros');
  outputErrorr.innerText = 'Campos inválidos';
}

function alertUserEmailPhone() {
  const btnValidateLogin = document.getElementById('button-login');
  btnValidateLogin.addEventListener('click', (e) => {
    const userEmailPhone = document.getElementById('user-email-phone');

    alert(userEmailPhone.value);
    e.preventDefault();
  });
}

function validateNewUser() {
  const btnRegister = document.getElementById('facebook-register');
  btnRegister.addEventListener('click', (e) => {
    const arrayInputs = getInputs();
    const generCustomIsHide = !boxGenerGustom.classList.contains('hide');
    if (checkErrosForm(arrayInputs) > 0 || !checkErroFormBullet(bulletGender)) {
      outputError();
    }

    if (generCustomIsHide && inputGenerCustom.value === '') {
      outputError();
    }

    e.preventDefault();
  });
}

function optionalGener() {
  bulletGener.forEach((ele) => {
    ele.addEventListener('click', () => {
      if (bulletOptional.checked) {
        boxGenerGustom.classList.remove('hide');
      } else {
        boxGenerGustom.classList.add('hide');
      }
    });
  });
}

alertUserEmailPhone();
validateNewUser();
optionalGener();
