document.getElementById('button-login').addEventListener('click', () => {
  alert(document.getElementById('user-email-phone').value);
});

document.getElementById('facebook-register').addEventListener('click', () => {
  const forms = document.getElementById('main-form');
  const Invalido = document.createElement('p');
  const inputs = document.getElementsByTagName('input');
  for (let x = 2; x < inputs.length; x += 1) {
    if (inputs[x].value === '') {
      forms.appendChild(Invalido);
      Invalido.innerText = 'Campos inválidos';
    }
  }
});
