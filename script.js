function entrarFacebook(){
let entrarBotao = document.getElementById("button-login");
entrarBotao.addEventListener('click',function(){   
    console.log("teste");
})
}
entrarFacebook();





















































// Validando campos
const inputText = document.querySelectorAll('.form input[type=text');
const registerBtn = document.getElementById('facebook-register');

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const form = document.querySelector('.form');
    const erro = document.createElement('p');
    erro.innerText = 'Campos inválidos';
    erro.style.color = 'red';
    

    for (let index = 0; index < inputText.length; index += 1) {
        if (inputText[index].value === '') {
            form.appendChild(erro);
        }
    }
})

//campo personalizar genero

const otherGender = document.getElementById('other');
const genderOther_div = document.querySelector('.gender-other');
const radios = document.querySelectorAll('input[type=radio]')

radios.forEach(radio => {
    radio.addEventListener('click', () => {
        if (radio.id === 'other') {
            genderOther_div.style.display = 'block';
        } else {
            genderOther_div.style.display = 'none';
        }
    })
})











