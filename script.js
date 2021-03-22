//                     Aux Functions

// Check All Inputs from Sign Up Form

const checkSignUpFormInputs = () => {
  let radioIsChecked = false;
  let emptyInput = false;
  const signUpInputs = document.querySelectorAll('#signUpForm input');
  signUpInputs.forEach((input) => {
    if (input.type !== 'radio') {
      if (input.value === '') emptyInput = true;
    } else if (input.checked) radioIsChecked = true;
  });
  return emptyInput || !radioIsChecked;
};

//             Remove Error message before inserting another

const removeElement = (element) => {
  if (element) {
    element.parentElement.removeChild(element);
  }
};

//            create custom gender input or remove if needed

const createCustomGenderInput = (event) => {
  const oldCustomInput = document.querySelector('#gender-custom-input');
  const { target } = event;
  if (target.value === 'Personalizado') {
    console.log('Personalizado');
    removeElement(oldCustomInput);
    const customGenderInput = document.createElement('input');
    customGenderInput.setAttribute('type', 'text');
    customGenderInput.setAttribute('name', 'gender-custom');
    customGenderInput.setAttribute('placeholder', 'Gênero (opcional)');
    customGenderInput.setAttribute('id', 'gender-custom-input');
    customGenderInput.setAttribute('class', 'input');
    target.parentElement.parentElement.appendChild(customGenderInput);
  } else {
    removeElement(oldCustomInput);
  }
};

//                      Listeners

// set sign up button listener and function
const setSignUp = () => {
  const signUpBtn = document.querySelector('#facebook-register');
  const form = signUpBtn.parentElement.parentElement;
  signUpBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const hasError = checkSignUpFormInputs();
    const oldErrorMessage = document.querySelector('#errorMessage');
    if (hasError) {
      const errorMessage = document.createElement('p');
      errorMessage.setAttribute('id', 'errorMessage');
      errorMessage.innerText = 'Campos inválidos';
      removeElement(oldErrorMessage);
      form.insertBefore(errorMessage, form.firstChild);
    } else {
      removeElement(oldErrorMessage);
    }
  });
};

// Set Custom Gender Radio Listener

const setCustomGenderRadio = () => {
  const radioInputs = document.querySelectorAll('input[type="radio"]');
  radioInputs.forEach((radio) => {
    radio.addEventListener('click', (event) => createCustomGenderInput(event));
  });
};

function loginAlert() {
  const emailPhone = document.getElementById('user-email-phone');
  alert(emailPhone.value);
}

const loadButtons = () => {
  setSignUp();
  setCustomGenderRadio();
};

window.onload = () => {
  loadButtons();
  const loginButton = document.getElementById('button-login');
  loginButton.addEventListener('click', loginAlert);
};
