






























function entrar() {
  const btnentrar = document.getElementById('button-login');
  const email = document.getElementById('user-email-phone-label');
  btnentrar.addEventListener('click',alertemail);
  function alertemail() {
    alert(email.value); 
  }   
}

entrar();
