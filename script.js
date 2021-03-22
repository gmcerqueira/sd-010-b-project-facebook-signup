document.getElementById('button-login').addEventListener('click', alertEntrar);
function alertEntrar() {
    let user = document.getElementById('user-email-phone').value;
    alert(user);
}