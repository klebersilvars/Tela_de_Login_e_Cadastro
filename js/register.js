// variáveis
let nome = document.querySelector('.input__name');
let email = document.querySelector('.input__email');
let pass = document.querySelector('.input__pass');
let registrar = document.querySelector('.btn__registrar');
let confirmPass = document.querySelector('.input__confirmPass');
let errorName = document.querySelector('.span__errorName');
let errorEmail = document.querySelector('.span__errorEmail');
let errorPass = document.querySelector('.span__errorPass');
let errorConfirm = document.querySelector('.span__errorConfirmPass');


//CÓDIGO COMPLETO
nome.addEventListener('keyup', function() {
    
    if(nome.value.length <= 3) {
        errorName.innerHTML = "Preencha seu nome corretamente";
        errorName.style.color = "red";
    }else {
        errorName.innerHTML = "";
        errorName.style.color = "";
    }
});

email.addEventListener('keyup', function() {

    if(email.value.length <= 4) {
        errorEmail.innerHTML = "Preencha seu e-mail corretamente!!";
        errorEmail.style.color = "red";
    }else {
        errorEmail.innerHTML = "";
        errorEmail.style.color = "";
    }
});

pass.addEventListener('keyup', function() {

    if(pass.value.length <= 5) {
        errorPass.innerHTML = "Sua senha deverá ter 6 caracteres";
        errorPass.style.color = "red";
    }else {
        errorPass.innerHTML = "";
        errorPass.style.color = "";
    }
});

confirmPass.addEventListener('keyup', function() {

    if(pass.value != confirmPass.value) {
        errorConfirm.innerHTML = "Senhas diferentes!";
        errorConfirm.style.color = "red";
    }else {
        errorConfirm.innerHTML = "";
        errorConfirm.style.color = "";
    }
});

registrar.addEventListener('click', function() {

    if(nome.value.length <= 3 | email.value.length <= 4 | pass.value.length <= 5 | confirmPass.value.length <= 1 ) {
        swal("Ops, algo deu errado", "Tente novamente!", "error");
        nome.value = '';
        email.value = '';
        pass.value = '';
        confirmPass.value = '';
    }else if(pass.value != confirmPass.value) {
        alert("As senhas são diferentes");
        pass.value = '';
        confirmPass.value = '';
    }else { 
        //SE DEU TUDO CERTO ACIMA, VAI CAIR NA CRIAÇÃO DE REGISTRO ABAIXO
       firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)

       .then( (value) => {

        swal("Tudo ok!", "Cadastro realizado com sucesso! Você será redirencionado para a tela de login.", "success");
        email.value = ''
        pass.value = ''
        nome.value = ''
        pass.value = ''
        confirmPass.value = '';

        setTimeout( ()=> {
            window.location.href = "http://127.0.0.1:5500/index.html"
        },1500);

       })
       .catch( (error)=> {

        alert("Algo deu errado, tente novamente!")
        confirmPass.value = ''
        pass.value = ''
       })
    }
});

