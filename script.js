//  Declarações:
const submitBtn = document.getElementById('button-login');
const user = document.getElementById('user-email-phone');

//  Funções:
function alerta() {
  alert(user.value);
}

// function verificarTexto() {
//   if (cadastro.firstname.value === '' || cadastro.lastname.value === '' || cadastro.phone_email.value === '' || cadastro.password.value === '' || cadastro.birthdate.value === '') {
//      alert ("Campos inválidos");
//   };
// }

// function verificarTexto(){
//   if (cadastro.lastname.value == "")
//   {alert ("Campos inválidos") }
//   }
// Peguei informações desse site: http://www.linhadecodigo.com.br/artigo/3503/configurando-funcoes-de-um-formulario-html-com-javascript.aspx#ixzz6ptmsOtje

//  Chamadas das funções:
submitBtn.addEventListener('click', alerta);
