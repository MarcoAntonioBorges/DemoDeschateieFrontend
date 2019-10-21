const API_CADASTRO_EVENTO = "https://deschateie.herokuapp.com/eventos";
const FORM = $('#form-cadastro-evento').submit(cadastrar);
const USER_INPUT = $('#user');
var USER;

$(window).ready(function(){
    USER = JSON.parse(sessionStorage.getItem('user'));
    autenticar(USER);
    USER_INPUT.text('Olá, ' + USER.nome);
});

function autenticar(usuario) { 
    console.log(usuario);
};

function cadastrar(e){
    e.preventDefault();

    let nome = e.currentTarget[0].value;
    let descricao = e.currentTarget[1].value;
    let tipo = e.currentTarget[2].value;
    let capacidade = e.currentTarget[3].value;
    let dataInicio = e.currentTarget[4].value;
    let dataFinal = e.currentTarget[5].value;
    console.log(e.currentTarget[6]);
    let uf = e.currentTarget[7].value;
    let complemento = e.currentTarget[8].value;
    let numero = e.currentTarget[9].value;
    let foto = e.currentTarget[10].value;
    let cep = e.currentTarget[11].value;
    let logradouro = e.currentTarget[12].value;
    let pais = e.currentTarget[13].value;
    let bairro = e.currentTarget[14].value;
    let cidade = e.currentTarget[15].value;
 
    console.log(FORM);

    var data = {
        "nome": nome,
        "descricao": descricao,
        "capacidade": capacidade,
        "dataInicio": dataInicio,
        "dataFim": dataFinal,
        "tipo": tipo,
        "isGratuito": true,
        "uf": uf,
        "complemento": complemento,
        "numero": numero,
        "foto": foto,
        "cep": cep,
        "logradouro": logradouro,
        "pais": pais,
        "bairro": bairro,
        "cidade": cidade
    }

    console.log(data);

    $.ajax({
        url : API_CADASTRO_EVENTO,
        type : 'post',
        contentType: "application/json",
        data : JSON.stringify(data)

    ,beforeSend : function(){
        console.log('Enviando...');
    }}).done(function(msg){
            console.log(msg);
            Swal.fire(
                'Sucesso!',
                'Evento cadastro com sucesso!',
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


    $('#form-cadastro-evento')[0].reset();
}