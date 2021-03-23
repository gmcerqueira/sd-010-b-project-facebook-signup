const button = document.getElementById('button-login');

function alertButton() {
  const emailTel = document.getElementById('user-email-phone');
  alert(emailTel.value);
}

const customGenderRadio = document.getElementById('custom');
const customGenderInput = document.getElementById('gender-custom');
const genderRadio = document.querySelectorAll('input[name=gender]');

function radioEventClick() {
  for (let element = 0; element < genderRadio.length; element += 1) {
    genderRadio[element].addEventListener('click', (e) => {
      elementToggleVisibility(e);
    })
  }
}

function elementToggleVisibility(event) {
  if (event.toElement === customGenderRadio) {
    customGenderInput.classList.remove('hidden');
  } else {
    customGenderInput.classList.add('hidden');
  }
}

window.onload = function () {
  button.addEventListener('click', alertButton);
  radioEventClick();
}
