function spawn(element) {
    const main = document.querySelector('main');
    main.appendChild(element);
    return main;
}

const header = document.createElement('header');
header.class = 'top-bar';
header.style.backgroundColor = "rgb(66, 103, 178)"
spawn(header);