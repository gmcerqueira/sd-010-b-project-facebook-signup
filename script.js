function alerta() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}

function validaDados() {
  const name = document.getElementById('firstname');
  const nameLastname = document.getElementById('lastname');
  const phone = document.getElementById('phone_email');
  const password = document.getElementById('password');
  const birthdate = document.getElementById('birthdate');
  if ((name.value === '') || (nameLastname.value === '') || (phone.value === '') || (password.value === '') || (birthdate.value === '')) {
    const pai = document.getElementById('campo-obrigatorio');
    const p = document.createElement('p');
    p.innerHTML = 'Campos inválidos';
    pai.appendChild(p);
  }
}

document.getElementById('button-login').addEventListener('click', alerta);
document.getElementById('facebook-register').addEventListener('click', validaDados);
