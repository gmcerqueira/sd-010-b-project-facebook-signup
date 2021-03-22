function spawn(element) {
  const main = document.querySelector('main');
  main.appendChild(element);
  return main;
}

const header = document.createElement('header');
header.className = 'top-bar';
header.style.backgroundColor = 'rgb(66, 103, 178)';
header.style.display = 'flex';
header.style.justifyContent = 'space-between';
spawn(header);

const img = document.createElement('img');
img.className = 'facebook-logo';
img.src = 'imgs/facebook-logo.png';
document.querySelector('.top-bar').appendChild(img);

const forms = document.createElement('form');
forms.className = 'facebook-login';
forms.style.display = 'flex';
document.querySelector('.top-bar').appendChild(forms);

const field = document.createElement('fieldset');
field.className = 'form-group';
field.style.display = 'flex';
field.style.flexDirection = 'column';
document.querySelector('form').appendChild(field);

const lemail = document.createElement('label');
lemail.id = 'user-email-phone-label';
lemail.htmlFor = 'user-email-phone';
lemail.innerText = 'Email ou telefone';
document.querySelector('fieldset').appendChild(lemail);

const iemail = document.createElement('input');
iemail.id = 'user-email-phone';
iemail.type = 'text';
iemail.innerText = 'Email ou telefone';
document.querySelector('fieldset').appendChild(iemail);
