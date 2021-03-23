function addGender () {
  
  let labelGender = document.getElementById('label-gender');
  if (document.querySelector("#custom-gender").checked === true) {
    let newInput = document.createElement('input');
    labelGender.appendChild(newInput);
    newInput.id = 'newInput';
    newInput.name = 'gender-custom';
    newInput.placeholder = 'Gênero (opcional)';
    }
}

function checkNewInput() {
  let labelGender = document.getElementById('label-gender');
  if(document.getElementById('newInput')) {
    return true
  } else {
    addGender()
  }
}

function alert1 () {
  let login = document.getElementById('user-email-phone').value;
  alert(login);
}


window.onload = function start(){
  
  let signIn = document.querySelector('#button-login');
  let btn = document.getElementById('custom-gender')
  let dateInput = document.getElementById('birthdate').DatePickerX

  dateInput.init({
    mondayFirst: false,
    format: "dd/mm/yyyy",
    weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dexembro'],
    todayButtonLabel: "Hoje",
    clearButtonLabel: "Limpar"
  })
    
  
  
  signIn.addEventListener('click', alert1);
  
  
  btn.addEventListener('click', checkNewInput)
  

}