//  Declarações:
const submitBtn = document.getElementById('button-login');
const user = document.getElementById('user-email-phone');

//  Funções:
function alerta() {
  alert(user.value);
}

function verificarTexto() {
  let campos = document.querySelectorAll('.teste')
  campos.forEach((item, index) => {
    if (item.value == '') {
      campos[index].value = "Campos inválidos";
    }
  })
}

//  Chamadas das funções:
submitBtn.addEventListener('click', alerta);
