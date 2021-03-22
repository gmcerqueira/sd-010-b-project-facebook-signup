function entrarFacebook() {
    let entrarBotao = document.getElementById("button-login");
    entrarBotao.addEventListener('click', function () {
        let emailCelular = document.getElementById("user-email-phone").value
        alert(emailCelular);
        
    })
}
entrarFacebook();