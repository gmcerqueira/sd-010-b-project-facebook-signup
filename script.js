function alerta() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}

function valida() {
  const name = document.getElementById('firstname').value;
  const Last = document.getElementById('lastname').value;
  const phone = document.getElementById('phone_email').value;
  const passwd = document.getElementById('password').value;
  const date = document.getElementById('birthdate').value;
  if ((name === '') || (Last === '') || (phone === '') || (passwd === '') || (date === '')) {
    const pai = document.getElementById('campo-obrigatorio');
    const p = document.createElement('p');
    p.innerHTML = 'Campos inválidos';
    pai.appendChild(p);
  }
}

document.getElementById('button-login').addEventListener('click', alerta);
document.getElementById('facebook-register').addEventListener('click', valida);
