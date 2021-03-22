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

const loadButtons = () => {
  setSignUp();
};

window.onload = () => {
  loadButtons();
};
