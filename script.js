const buttonEntrar = document.getElementById('button-login');

const form = document.getElementById('forms');

function botaoEntrar() {
  const emailTel = document.getElementById('user-email-phone').value;
  alert(emailTel);
}

buttonEntrar.addEventListener('click', botaoEntrar);

form.addEventListener('submit', validar);

// Referência tirado do https://medium.com/@jezmael/como-validar-os-dados-de-um-formul%C3%A1rio-com-javascript-abdc5a5fba67

function validar(evento) {
  evento.preventDefault();

  var name = document.getElementById("name");
  var lastname = document.getElementById("lastname");
  var phone_email = document.getElementById("phone_email");
  var password = document.getElementById("password");
  var birthdate = document.getElementById("birthdate");
  var radio = document.querySelector('input[name="gender"]:checked');
  
    if (name.value == "") {
      alert("Nome não informado");
  
      // Deixa o input com o focus
      name.focus();
      // retorna a função e não olha as outras linhas
      return;
    }
    if (lastname.value == "") {
      alert("Sobrenome não informado");
      lastname.focus();
      return;
    }
    if (phone_email.value == "") {
      alert("E-mail não informado");
      phone_email.focus();
      return;
    }
    if (password.value == "") {
      alert("Senha não informada");
      password.focus();
      return;
    }
    if (birthdate.value == "") {
      alert("Aniversário não informado");
      birthdate.focus();
      return;
    }
    if (radio == null) {
      alert("Marque um gênero");
      return;
    }
  }
