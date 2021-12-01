let logar = document.querySelector('.btn__logar');
let email = document.querySelector('.input__email');
let pass = document.querySelector('.input__pass');


logar.addEventListener('click', function() {

    firebase.auth().signInWithEmailAndPassword(email.value, pass.value)
    .then( (value)=> {
        swal("Tudo ok!", "Login feito com sucesso", "success");
        email.value = ('');
        pass.value = ('');
        //DEPOIS DISSO PRECISO LEVAR PARA UMA TELA DENTRO DO SISTEMA
    })
    .catch( (error)=> {
        swal("Ops, algo deu errado!", "Tente novamente!", "error");
        pass.value = ('');
    })
});