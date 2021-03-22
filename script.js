window.onload = function start(){

  let dateInput = document.getElementById('birthdate').DatePickerX
  let signIn = document.querySelector('#button-login');

  dateInput.init({
    mondayFirst: false,
    format: "dd/mm/yyyy",
    weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dexembro'],
    todayButtonLabel: "Hoje",
    clearButtonLabel: "Limpar"
  })
    
  
  function alert1 () {
    let login = document.getElementById('user-email-phone').value;
    alert(login);
  }
  
  signIn.addEventListener('click', alert1);
}
