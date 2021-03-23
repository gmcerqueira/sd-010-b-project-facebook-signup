function teste() {
  if (document.getElementById('user-email-phone').value === '') {
    alert('Email ou telefone');
  }
}
document.getElementById('button-login').addEventListener('click', teste);
