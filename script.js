const enterButton = document.querySelector('#button-login');

enterButton.addEventListener('click', () => {
  alert(document.getElementById('user-email-phone').value);
});

 const form = document.getElementById('formulario');

 form.addEventListener('submit', validador);

 function validador (){
  var Cadname = document.getElementById("name");
  var Cadlastname = document.getElementById("sName");
  var Cadphone_email = document.getElementById("foEmail");
  var Cadpassword = document.getElementById("foSenha");
  var Cadbirthdate = document.getElementById("label-birthdate");
  var Cadradio = document.querySelector('input[name="gender"]:checked');

    if (Cadname.value == "") {
      alert("Campos inválidos");
      return;
    }

    if (Cadlastname.value == "") {
      alert("Campos inválidos");
      return;
    }

    if (Cadphone_email.value == "") {
      alert("Campos inválidos");
      return;
    }

    if (Cadpassword.value == "") {
      alert("Campos inválidos");
      return;
    }

    if (Cadbirthdate.value == "") {
      alert("Campos inválidos");
      return;
    }
    
    if (Cadradio == null) {
      alert("Campos inválidos");
      return;
    }
}
