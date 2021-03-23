const buttonId = document.getElementById('button-login');

buttonId.addEventListener('click', () => {
  const valueFirst = document.getElementById('user-email-phone').value;
  alert(valueFirst);
});

// Estava com dificuldade para passar no Lint, pois sempre ficava apontando uma função inesperada. Depois de olhar alguns códigos de alguns colegos utilizei o => ao invés da função e o Lint aceitou.
