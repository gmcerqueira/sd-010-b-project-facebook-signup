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
  const input = document.getElementById('subscription').getElementsByTagName('input');
  for ( let index = 0 ; index < 5; index += 1) {
    if (input[index].value === "" ) {
      alert('Campos inválidos');
      break;
    } else if (!(input[5].checked) || !(input[6].checked) || !(input[7].checked)){
    alert('Campos inválidos');
    }
  }
}

function checkfilled() {
  const btnsumit = document.getElementsByClassName('btnSumit')[0];
  btnsumit.addEventListener('click', filledfields);
}

checkfilled();