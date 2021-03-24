const enterButton = document.querySelector('#button-login');

enterButton.addEventListener('click', () => {
  alert(document.getElementById('user-email-phone').value);
});

const form = document.getElementById('formulario');

function validador() {
  form.addEventListener('submit', validador);
  const CadName = document.getElementById('name');
  const CadLastName = document.getElementById('sName');
  const CadPhoneEmail = document.getElementById('foEmail');
  const CadPassword = document.getElementById('foSenha"');
  const CadBirthdate = document.getElementById('label-birthdate');
  const CadRadio = document.querySelector('input[name="gender"]:checked');
  const
  if (CadName.value === '') {
    alert('Campos inválidos');
  }

  if (CadLastName.value === '') {
    alert('Campos inválidos');
  }

  if (CadPhoneEmail.value === '') {
    alert('Campos inválidos');
  }

  if (CadPassword.value === '') {
    alert('Campos inválidos');
  }

  if (CadBirthdate.value === '') {
    alert('Campos inválidos');
  }

  if (CadRadio === null) {
    alert('Campos inválidos');
  }
}

