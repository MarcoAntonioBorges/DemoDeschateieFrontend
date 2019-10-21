const API_CADASTRO_USUARIO = "https://deschateie.herokuapp.com/usuarios";
const FORM = $('#form-cadastrar-usuario').submit(cadastrar);


function cadastrar(e){
    e.preventDefault();

    let nome = e.currentTarget[0].value;
    let email = e.currentTarget[1].value;
    let dataNascimento = e.currentTarget[2].value;
    let genero = e.currentTarget[3].value;
    let login = e.currentTarget[4].value;
    let senha = e.currentTarget[5].value;    

    var data = {
        "nome": nome,
        "email": email,
        "dataNascimento": dataNascimento,
        "login": login,
        "senha": senha,
        "foto": null,
        "genero": genero
    }

    console.log(data);

    $.ajax({
        url : API_CADASTRO_USUARIO,
        type : 'post',
        contentType: "application/json",
        data : JSON.stringify(data)

    ,beforeSend : function(){
        console.log('Enviando...');
    }}).done(function(msg){
            console.log(msg);
            Swal.fire(
                'Sucesso!',
                'Agora poderá fazer o login!',
                'success'
              )
    }).fail(function(jqXHR, textStatus, msg){
            console.log(msg);
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Algo deu errado!'
              })
    });


    $('#form-cadastrar-usuario')[0].reset();
}