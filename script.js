function mostrarEmail() {
  const texto = document.getElementById('user-email-phone').value;
  alert(`${texto}`);
}

function bttEntrar() {
  const botaoLogin = document.getElementById('button-login');
  botaoLogin.addEventListener('click', mostrarEmail);
}

bttEntrar();

function mostrarElemento() {
  const personalizado = document.getElementById('genero-personalizado');
  personalizado.style.display = 'flex';
}

function adcEvntoGenPers() {
  const personalizado = document.getElementById('personalizado');
  personalizado.addEventListener('click', mostrarElemento);
}

adcEvntoGenPers();

function esconderElemento() {
  const personalizado = document.getElementById('genero-personalizado');
  personalizado.style.display = 'none';
}

function adcEvntoMascFem() {
  const masculino = document.getElementById('masculino');
  masculino.addEventListener('click', esconderElemento);
  const feminino = document.getElementById('feminino');
  feminino.addEventListener('click', esconderElemento);
}

adcEvntoMascFem();

function mostrarInfos() {
  const nome = document.getElementById("nameLogin").value;
  const sobrenome = document.getElementById("lastnameLogin").value;
  const contato = document.getElementById("phoneEmailLogin").value;
  const nascimento = document.getElementById("nascimentoLogin").value;
  const form = document.getElementById('registro');
  const genero = form.elements.gender.value;
  document.getElementsByTagName('h1')[0].innerText = `Olá ${nome} ${sobrenome}`;
  document.getElementsByClassName('quick-easy')[0].style.display = 'none';
  document.getElementById('registro').style.display = 'none';
  const infos = document.getElementById('infos');
  infos.style.display = 'flex';
  infos.innerHTML = `<p>Contato: ${contato}</p><p>Nascimento: ${nascimento}</p><p>Gênero: ${genero}</p>`;
}

// alterar a funçãop abaixo para uma que depois das verificações de formulário preenchido e validado, rodem a função acima;
function bttCadastro() {
  const botaoCadastro = document.getElementById('facebook-register');
  botaoCadastro.addEventListener('click', mostrarInfos); //esse event listener não pode ser no botão de cadastro
}

bttCadastro(); //essa função não pode ser no botão de cadastro