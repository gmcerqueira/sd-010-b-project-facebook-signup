function emailTelephoneAlert() {
    let emailTel = document.getElementById('user-email-phone-label');
    let item = String(emailTel.value);
    alert(item);
}

window.onload = function () {
    document.getElementById('button-login').addEventListener('click', emailTelephoneAlert);
}