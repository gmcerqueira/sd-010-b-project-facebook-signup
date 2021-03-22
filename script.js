function spawn(element) {
  const main = document.querySelector('main');
  main.appendChild(element);
  return main;
}

const header = document.createElement('header');
header.className = 'top-bar';
header.style.backgroundColor = 'rgb(66, 103, 178)';
header.style.display = 'flex';
header.style.justifyContent = 'space-evenly';
spawn(header);

const img = document.createElement('img');
img.className = 'facebook-logo';
img.src = 'imgs/facebook-logo.png';
document.querySelector('.top-bar').appendChild(img);

const forms = document.createElement('form');
forms.className = 'facebook-login';
forms.style.display = 'flex';
document.querySelector('.top-bar').appendChild(forms);
