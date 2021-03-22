function validarCampos() {
  const validateFields = document.querySelectorAll('.input-form');

  for (let index = 0; index < validateFields.length; index += 1) {
    if (validateFields[index].value === '') {
      alert('Todos os campos são obrigatórios!');
      break;
    }
  }
}

function cadastrarButton() {
  const submitButton = document.getElementById('facebook-register');
  submitButton.addEventListener('click', validarCampos);
}

cadastrarButton();
