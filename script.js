
function entrarFacebook() {
    let entrarBotao = document.getElementById("button-login");
    entrarBotao.addEventListener('click', function () {
        let emailCelular = document.getElementById("user-email-phone").value
        alert(emailCelular);
    })
}
entrarFacebook();


function substituiConteudo() {
    let botaoCadastro = document.getElementById("facebook-register");
    botaoCadastro.addEventListener('click', function () {

        let getPrimeiroNome = document.getElementById("first-name-form").value;
        let getUltimoNome = document.getElementById("last-name-form").value;
        let NomeCompleto = document.createElement('h2');
        NomeCompleto.innerText = "Olá, " + getPrimeiroNome + " " + getUltimoNome;

        let getEmailCelular = document.getElementById("phone-email-form").value;
        let emailCelular = document.createElement('p');
        emailCelular.innerText = getEmailCelular;

        let getDataNascimento = document.getElementById("date-birthdate-form").value;
        let dataNascimento = document.createElement('p');
        dataNascimento.innerText = getDataNascimento;

        let opcaoGenero = document.createElement('p');
        opcaoGenero.innerText = document.querySelector('input[type="radio"]:checked').value;

        let formDireita = document.querySelector('.right-content');
        formDireita.innerHTML = "";
        formDireita.appendChild(NomeCompleto);
        formDireita.appendChild(emailCelular);
        formDireita.appendChild(dataNascimento);
        formDireita.appendChild(opcaoGenero);
    })
    }


substituiConteudo();




















































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