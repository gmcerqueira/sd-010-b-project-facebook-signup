const loginButton = document.querySelector('#button-login');
const inputEmail = document.querySelector('#user-email-phone-label');

function alertEmail() {
  alert(`${inputEmail.value}`);
}

loginButton.addEventListener('click', alertEmail);

// --------------------

const genero = document.querySelector("#personalizado");

function generoPerson () {
  const customGender = document.getElementById("gender-custom");
  if (customGender.style.display === "none") {
    customGender.style.display = "block";
  } else {
    customGender.style.display = "none";
  }
}
