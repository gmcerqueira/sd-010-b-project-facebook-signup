/*
   Essa função adiciona um escutador de eventos eventName que dispara a function functionName para cada elemento que tenha o cssSelector.

   Material consultado sobre o loop forEach
   https://www.w3schools.com/jsref/jsref_foreach.asp
   Material consultado sobre arrow functions
   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
   https://www.w3schools.com/js/js_arrow_function.asp
  */
// function forEachElemAddEventListener(cssSelector, eventName, functionName) {
//   // obtem uma lista de elementos de cssSelector e armazena em elementsList
//   const elementsList = document.querySelectorAll(cssSelector);

//   // para cada elemento da lista de elementos
//   elementsList.forEach((element) => {
//     // adiciona um escutador de eventos eventName que dispara a function functionName
//     element.addEventListener(eventName, functionName);
//   });
// }

/*
   Essa função adiciona um escutador de eventos eventName que dispara a function functionName para um elemento que tenha o cssSelector.
  */
function addEventListener(cssSelector, eventName, functionName) {
  // obtem um elemento de cssSelector e armazena em element
  const element = document.querySelector(cssSelector);

  // para o elemento adiciona um escutador de eventos eventName que dispara a function functionName
  element.addEventListener(eventName, functionName);
}

/*
   Essa função executa a configuração relacionada aos eventos, como por exemplo, escutadores de eventos.
  */
function setupEvents() {
  // para elemento de id button-login adiciona um escutador de evento click que dispara um alert com o valor do campo "Email ou telefone"
  addEventListener('#button-login', 'click', () => {
    alert(
      `Email ou telefone: ${document.getElementById('user-email-phone').value}`
    );
  });
}

/*
   Essa função executa a function init para carregar valores e setup escutadores de evento
  */
window.onload = function init() {
  // define uma função init para carregar valores e realizar setup relacionado a eventos
  setupEvents(); // realiza setup relacionado a eventos.
};
