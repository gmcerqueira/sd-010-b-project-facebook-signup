function alerta() {
  alert('Email ou telefone');
}
function escutaBotao() {
    document.getElementById('button-login').addEventListener('click', alerta);
  }

window.onload = escutaBotao();
