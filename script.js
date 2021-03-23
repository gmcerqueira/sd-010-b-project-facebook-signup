function entrar() {
  const btnentrar = document.getElementById('button-login');
  const email = document.getElementById('user-email-phone');
  function alertemail() {
    alert(email.value);
  }
  btnentrar.addEventListener('click', alertemail);
}

entrar();

// Requisito 18
function filledfields() {
  const form = document.getElementById('subscription');
  const input = form.getElementsByTagName('input')
  for (let index = 0; index < input.length; index += 1) {
    if (index < 5 && input[index].value === '') {
      return alert('Campos inválidos');
    } 
    if (!(input[5].checked) || !(input[6].checked) || !(input[7].checked)) {
      alert('Campos inválidos');
    }
  }
}

function checkfilled() {
  const btnsumit = document.getElementsByClassName('btnSumit')[0];
  btnsumit.addEventListener('click', filledfields);
}

checkfilled();
