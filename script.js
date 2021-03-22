function loginAlert () {
    let emailPhone = document.getElementById('user-email-phone');
    alert(emailPhone.value);
}

window.onload = function () {
  let loginButton = document.getElementById('button-login');
  loginButton.addEventListener('click', loginAlert);
}