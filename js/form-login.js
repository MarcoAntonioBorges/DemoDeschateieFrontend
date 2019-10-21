const API_LOGIN = "https://deschateie.herokuapp.com/usuarios/autenticar";
const FORM = $('#form-login').submit(login);



function login(e){
    e.preventDefault();

    let email = e.currentTarget[0].value;
    let senha = e.currentTarget[1].value;

    var data = {
        "email": email,
        "senha": senha
    }

    console.log(data);

    $.ajax({
        url : API_LOGIN,
        type : 'post',
        contentType: "application/json",
        data : JSON.stringify(data)

    ,beforeSend : function(){
        console.log('Enviando...');
    }}).done(function(msg){
            console.log(msg);
            sessionStorage.setItem('user', JSON.stringify(msg));
            window.location.href = "../lista-eventos.html";
    }).fail(function(jqXHR, textStatus, msg){
            console.log(msg);
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Email ou Senha errado!'
              })
    });


    $('#form-login')[0].reset();
}