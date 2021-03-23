function emailTelephoneAlert() {
  const emailTel = document.getElementById('user-email-phone');
  alert(emailTel.value);
}

function customGender() {
  const custom = document.createElement('input');
  custom.name = 'gender-custom';
  custom.placeholder = 'Gênero (opcional)';
  const parent = document.getElementsByClassName('genders')[0];
  parent.appendChild(custom);
}

window.onload = function () {
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', emailTelephoneAlert);

  const genderCustom = document.getElementById('custom-gender');
  genderCustom.addEventListener('click', customGender);
};
