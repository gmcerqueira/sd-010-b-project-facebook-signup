const enterButton = document.querySelector('#button-login');

enterButton.addEventListener('click', () => {
  alert(document.getElementById('user-email-phone').value);
});
// const selectOther = document.querySelector('#other');
// selectOther.addEventListener('click' , () => {
//   const txt = document.createElement('input')
//   txt.type = 'Text';
//   txt.name = 'gender-custom';
//   txt.placeholder = 'Gênero (opcional)'
// });
const forms = document.querySelector('#formulario');
forms.addEventListener('submit', function() {
const Cadname = document.getElementById('name');
const CadLastName = document.getElementById('sName');
const CadPhoneEmail = document.getElementById('foEmail');
const CadPassword = document.getElementById('foSenha');  
const CadNiver = document.getElementById('label-birthdatee');
const CadRadios = document.querySelector('input[name="gender"]:checked');
  
  if(Cadname.value == ""){
    alert("Campos inválidos");
    return;
  }
  
 if(CadLastName.value == ""){
  alert("Campos inválidos");
  return;
 }

 if(CadPhoneEmail.value == ""){
  alert("Campos inválidos");
  return;
 }

 if(CadPassword.value == ""){
  alert("Campos inválidos");
  return;
 }

 if(CadNiver.value == "" ){
  alert("Campos inválidos");
  return;
 }
   
 if(CadRadios == null){
  alert("Campos inválidos");
  return;
 }
});