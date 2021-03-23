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
let missingData = false

function filledfields() {
  missingData = false
  const form = document.getElementById('subscription');
  const input = form.getElementsByTagName('input');
  for (let index = 0; index < input.length; index += 1) {
    if (index < 5 && input[index].value === '') {
      return (missingData = true);
    }
  }
}

function filledradios(){
  const form = document.getElementById('subscription');
  const input = form.getElementsByTagName('input');
  if (!(input[5].checked) && !(input[6].checked) && !(input[7].checked)) {
    return (missingData = true);
  }
}

function alertmissing() {
  filledfields();
  filledradios();
  if (missingData === true ) {
    alert('Campos inválidos');
  }
}

function checkfilled() {
  const btnsumit = document.getElementsByClassName('btnSumit')[0];
  btnsumit.addEventListener('click', alertmissing );
}

checkfilled();
