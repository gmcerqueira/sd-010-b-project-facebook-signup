const submitBtn = document.getElementById("button-login");
const user = document.getElementById("user-email-phone")
console.log(user);
submitBtn.addEventListener("click", alerta);

function alerta() {
  alert(user.value);
}