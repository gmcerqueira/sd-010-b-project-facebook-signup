const btnLogin = document.getElementById("button-login");
const txtEmailtel = document.getElementById("email-tel");

btnLogin.addEventListener("click", elertEmail);

function elertEmail() {
    alert(txtEmailtel.value);
}