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
