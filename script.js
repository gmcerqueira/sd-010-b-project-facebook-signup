function login() {
  const getButton = document.querySelector('#button-login');
  const emailPhone = document.querySelector('#user-email-phone');

  getButton.addEventListener('click', () => {
    if (emailPhone.value.length > 0) {
      window.alert(`${emailPhone.value}`);
    }
  });
}

login();

// function createDate() {
//   let getSelect = document.querySelector('.select-date');
//   let createOptionDate = document.createElement('option');
//   createOptionDate.className = 'option-days';

//   getSelect.appendChild(createOptionDate);
// }

// createDate();

// function addDays() {
//   let optionDay = document.querySelector('.option-days');
//   let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   for (let item = 0; item < array.length; item += 1) {
//     optionDay.innerText += array[item];
//   }
// }

// addDays();
