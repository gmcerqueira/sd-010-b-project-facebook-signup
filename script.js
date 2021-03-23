const enterButton = document.querySelector('#button-login');

function loginAlert() {
  const userEmailPhone = document.getElementById('user-email-phone');
  alert(userEmailPhone.value);
}

enterButton.addEventListener('click', loginAlert);