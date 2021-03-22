 window.onload = function () {

  // Criado o Elemento que vai conter a barra superior
  const top_bar = document.createElement("header");
  top_bar.className = "top-bar";
  document.body.appendChild(top_bar);

    // criado o elemento que vai conter os elementos do Topo
  const header = document.createElement("section");
  header.className = "header";
  top_bar.appendChild(header);

  // criado o elemento que vai conter o Logo do Facebook
  const facebook_logo = document.createElement("img");
  facebook_logo.className = "facebook-logo";
  facebook_logo.setAttribute("src", "./imgs/facebook-logo.png");
  facebook_logo.setAttribute("alt", "Logotipo");
  header.appendChild(facebook_logo);

  // criado o elemento que vai os inputs
  const inputs = document.createElement("form");
  inputs.className = "facebook-login";
  header.appendChild(inputs);

  // criado o elemento que vai o email ou telefone
  const sec_email_telefone = document.createElement("section");
  sec_email_telefone.className = "form-group";
  inputs.appendChild(sec_email_telefone);

  // criado o elemento label email
  const label_email_telefone = document.createElement("label");
  sec_email_telefone.id = "user-email-phone-label";
  label_email_telefone.innerText = "Email ou telefone";
  label_email_telefone.setAttribute("for", "user-email-phone");
  sec_email_telefone.appendChild(label_email_telefone);

  // criado o elemento input email
  const input_email_telefone = document.createElement("input");
  input_email_telefone.id = "user-email-phone";
  input_email_telefone.setAttribute("type", "text");
  sec_email_telefone.appendChild(input_email_telefone);

  // criado o elemento que vai a senha
  const sec_senha = document.createElement("section");
  sec_senha.className = "form-group";
  inputs.appendChild(sec_senha);

  // criado o elemento label senha
  const label_senha = document.createElement("label");
  label_senha.id = "user-password-label";
  label_senha.innerText = "Senha";
  label_senha.setAttribute("for", "user-password");
  sec_senha.appendChild(label_senha);

  // criado o elemento input email
  const input_senha = document.createElement("input");
  input_senha.id = "user-password";
  input_senha.setAttribute("type", "password");
  sec_senha.appendChild(input_senha);

  // criado o elemento que vai o botão
  const sec_botao = document.createElement("section");
  sec_botao.className = "form-control";
  inputs.appendChild(sec_botao);

  // criado o elemento botão
  const button_entrar = document.createElement("button");
  button_entrar.id = "button-login";
  button_entrar.innerText = "Entrar";
  sec_botao.appendChild(button_entrar);
  let signin = document.getElementById("button-login");

  // Criado o Elemento que vai conter o Main do site
  const main_site = document.createElement("section");
  main_site.className = "main-content";
  document.body.appendChild(main_site);

  // Criado o Elemento que vai conter o interior do main content Left content
  const left_content = document.createElement("aside");
  left_content.className = "left-content";
  main_site.appendChild(left_content);

  // Criado o Elemento que vai conter o interior do main content Rigth content
  const right_content = document.createElement("aside");
  right_content.className = "right-content";
  main_site.appendChild(right_content);
  
};