// Criado o Elemento que vai conter a barra superior
const topBar = document.createElement('header');
topBar.className = 'top-bar';
document.body.appendChild(topBar);

// criado o elemento que vai conter o Logo do Facebook
const facebookLogo = document.createElement('img');
facebookLogo.className = 'facebook-logo';
facebookLogo.setAttribute('src', 'imgs/facebook-logo.png');
facebookLogo.setAttribute('alt', 'Logotipo');
topBar.appendChild(facebookLogo);

// criado o elemento que vai os inputs
const inputs = document.createElement('form');
inputs.className = 'facebook-login';
topBar.appendChild(inputs);

// criado o elemento que vai o email ou telefone
const secEmailTelefone = document.createElement('div');
secEmailTelefone.className = 'form-group';
inputs.appendChild(secEmailTelefone);

// criado o elemento label email
const labelEmailTelefone = document.createElement('label');
labelEmailTelefone.id = 'user-email-phone-label';
labelEmailTelefone.innerText = 'Email ou telefone';
secEmailTelefone.appendChild(labelEmailTelefone);

// criado o elemento input email
const inputEmailTelefone = document.createElement('input');
inputEmailTelefone.setAttribute('type', 'text');
inputEmailTelefone.id = 'user-email-phone';
secEmailTelefone.appendChild(inputEmailTelefone);

// criado o elemento que vai a senha
const secSenha = document.createElement('div');
secSenha.className = 'form-group';
inputs.appendChild(secSenha);

// criado o elemento label senha
const labelSenha = document.createElement('label');
labelSenha.id = 'user-password-label';
labelSenha.innerText = 'Senha';
secSenha.appendChild(labelSenha);

// criado o elemento input email
const inputSenha = document.createElement('input');
inputSenha.setAttribute('type', 'password');
inputSenha.id = 'user-password';
secSenha.appendChild(inputSenha);

// criado o elemento que vai o botão
const secBotao = document.createElement('div');
secBotao.className = 'form-control';
inputs.appendChild(secBotao);

// criado o elemento botão
const buttonEntrar = document.createElement('button');
buttonEntrar.id = 'button-login';
buttonEntrar.innerText = 'Entrar';
secBotao.appendChild(buttonEntrar);
const signin = document.getElementById('button-login');
