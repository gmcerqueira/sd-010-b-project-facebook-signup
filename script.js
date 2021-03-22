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
imgNetwork.setAttribute('src', 'imgs/networking.png');
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
const spanContent = document.createElement('form');
spanContent.className = 'quick-easy';
spanContent.innerText = 'É rápido e fácil.';
rightContent.appendChild(spanContent);

// Criado um formulário para cadastro
const formRegister = document.createElement('form');
formRegister.id = 'register-form';
formRegister.setAttribute('action', '');
rightContent.appendChild(formRegister);

// Criado os Elementos de registro

// Nome
const inputNome = document.createElement('input');
inputNome.setAttribute('type', 'text');
inputNome.setAttribute('name', 'firstname');
inputNome.setAttribute('placeholder', 'Nome');
inputNome.className = 'inputs';
formRegister.appendChild(inputNome);
// Sobrenome

const lastNameNome = document.createElement('input');
lastNameNome.setAttribute('type', 'text');
lastNameNome.setAttribute('name', 'lastname');
lastNameNome.setAttribute('placeholder', 'Sobrenome');
lastNameNome.className = 'inputs';
formRegister.appendChild(lastNameNome);
// Email

const phoneNome = document.createElement('input');
phoneNome.setAttribute('type', 'text');
phoneNome.setAttribute('name', 'phone_email');
phoneNome.setAttribute('placeholder', 'Celular ou email');
phoneNome.className = 'inputs';
formRegister.appendChild(phoneNome);
// Password

const passwordNome = document.createElement('input');
passwordNome.setAttribute('type', 'password');
passwordNome.setAttribute('name', 'password');
passwordNome.setAttribute('placeholder', 'Nova senha');
passwordNome.className = 'inputs';
formRegister.appendChild(passwordNome);
// Label

const labelDate = document.createElement('label');
labelDate.id = 'label-birthdate';
labelDate.innerText = 'Data de nascimento';
labelDate.setAttribute('for', '');
formRegister.appendChild(labelDate);
// Data Nascimento

const dataNascimento = document.createElement('input');
dataNascimento.setAttribute('type', 'text');
dataNascimento.setAttribute('name', 'birthdate');
dataNascimento.setAttribute('placeholder', 'dd/mm/aaaa');
dataNascimento.className = 'inputs';
formRegister.appendChild(dataNascimento);

// criado função do alerta
function alerta() {
  alert('Email ou telefone');
}
signin.addEventListener('click', alerta);
