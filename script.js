function submitButton() {
  submitButton = document.getElementById('facebook-register');
  
  submitButton.addEventListener('click', validateFields);
}

function validateFields() {
  let validateFields = document.querySelectorAll('.input-form');

  for (let index = 0; index < validateFields.length; input += 1) {
    if (validateFields[index].value === '') {
      console.log(validateFields[index].value)
      alert("Todos os campos são obrigatórios!");
      break;
    }
  }

}

submitButton();