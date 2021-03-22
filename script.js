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
const secEmailTelefone = document.createElement('section');
secEmailTelefone.className = 'form-group';
inputs.appendChild(secEmailTelefone);

// criado o elemento label email
const labelEmailTelefone = document.createElement('label');
secEmailTelefone.id = 'user-email-phone-label';
labelEmailTelefone.innerText = 'Email ou telefone';
labelEmailTelefone.setAttribute('for', 'user-email-phone');
secEmailTelefone.appendChild(labelEmailTelefone);

// criado o elemento input email
const inputEmailTelefone = document.createElement('input');
inputEmailTelefone.id = 'user-email-phone';
inputEmailTelefone.setAttribute('type', 'text');
secEmailTelefone.appendChild(inputEmailTelefone);

// criado o elemento que vai a senha
const secSenha = document.createElement('section');
secSenha.className = 'form-group';
inputs.appendChild(secSenha);

// criado o elemento label senha
const labelSenha = document.createElement('label');
labelSenha.id = 'user-password-label';
labelSenha.innerText = 'Senha';
labelSenha.setAttribute('for', 'user-password');
secSenha.appendChild(labelSenha);

// criado o elemento input email
const inputSenha = document.createElement('input');
inputSenha.id = 'user-password';
inputSenha.setAttribute('type', 'password');
secSenha.appendChild(inputSenha);

// criado o elemento que vai o botão
const secBotao = document.createElement('section');
secBotao.className = 'form-control';
inputs.appendChild(secBotao);

// criado o elemento botão
const buttonEntrar = document.createElement('button');
buttonEntrar.id = 'button-login';
buttonEntrar.innerText = 'Entrar';
secBotao.appendChild(buttonEntrar);

//Criando o evendo de clique
buttonEntrar.addEventListener('click', function () {
  alert('Email ou telefone');
});

// Criado o Elemento que vai conter o Main do site
const mainSite = document.createElement('section');
mainSite.className = 'main-content';
document.body.appendChild(mainSite);

// Criado o Elemento que vai conter o interior do main content Left content
const leftContent = document.createElement('aside');
leftContent.className = 'left-content';
mainSite.appendChild(leftContent);

// criado o elemento que vai conter Imagem network
const imgNetwork = document.createElement('img');
imgNetwork.id = 'facebook-slogan';
imgNetwork.setAttribute('src', '/imgs/networking.png');
imgNetwork.setAttribute('alt', 'Networking');
leftContent.appendChild(imgNetwork);

// Criado o Elemento que vai conter o interior do main content Rigth content
const rightContent = document.createElement('aside');
rightContent.className = 'right-content';
mainSite.appendChild(rightContent);

// Criado o Elemento h1 que vai dentro Rigth content
const h1Content = document.createElement('h1');
h1Content.innerText = 'Abra uma conta';
rightContent.appendChild(h1Content);

// Criado o Elemento span que vai dentro Rigth content
const spanContent = document.createElement('span');
spanContent.className = 'quick-easy';
spanContent.innerText = 'É rápido e fácil.';
rightContent.appendChild(spanContent);
