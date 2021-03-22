function createNewParagraph() {
  const paragraph = document.createElement('p');
  paragraph.style.color = 'red';
  paragraph.classList += 'invalid';
  paragraph.innerText = 'Campos inválidos';
  return paragraph;
}

function validateForm() {
  const inputs = document.querySelectorAll('input');
  const paragraph = createNewParagraph();
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

document.getElementById('facebook-register').addEventListener('click',
  (event) => {
    event.preventDefault();
    validateForm();
    if (validateForm()) {
      removeAllChildNodes(document.querySelector('.left-content'));
    }
  });
