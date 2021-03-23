function login() {
  const getButton = document.querySelector('#button-login');
  const emailPhone = document.querySelector('#user-email-phone');

  getButton.addEventListener('click', () => {
    if (emailPhone.value.length > 0) {
      window.alert(`${emailPhone.value}`);
    }
  });
}

login();

function addOtherGender() {
  const radiosDiv = document.querySelector('.radios');
  console.log(radiosDiv);
  const otherGender = document.querySelector('#Personalizado');
  console.log(otherGender);

  otherGender.addEventListener('click', () => {
    if ((otherGender.value = 'checked')) {
      let createInput = document.createElement('input');
      createInput.type = 'text';
      createInput.name = 'gender-custom';
      createInput.placeholder = 'Gênero (opcional)';
      createInput.className = 'other';

      radiosDiv.appendChild(createInput);
    }
  });
}

addOtherGender();
