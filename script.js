function spawn(element) {
  const main = document.querySelector('main');
  main.appendChild(element);
  return main;
}

const header = document.createElement('header');
header.className = 'top-bar';
header.style.backgroundColor = 'rgb(66, 103, 178)';
header.style.display = 'flex';
spawn(header);

const img = document.createElement('img');
img.className = 'facebook-logo';
img.src = './imgs/facebook-logo.png';
document.querySelector('.top-bar').appendChild(img);
