const API_CADASTRO_EVENTO = "https://deschateie.herokuapp.com/eventos";
const FORM = $('#form-cadastro-evento').submit(cadastrar);
const USER_INPUT = $('#user');
var USER;
var AA;

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
    let form = $('#form-cadastro-evento');

    let nome = form[0].nome.value;
    let descricao = form[0].descricao.value;
    var tipo = "TECNOLOGIA";
    if(e.currentTarget[2].value == "TECNOLOGIA"){
        tipo = form[0].tipo.value;
    }
    let capacidade = form[0].capacidade.value;
    let dataInicio = form[0].dataInicio.value;
    let dataFinal = form[0].dataFinal.value;
    console.log(e.currentTarget[6]);
    let uf = form[0].uf.value;
    let complemento = form[0].complemento.value;
    let numero = form[0].numero.value;
    let foto = form[0].foto.value;
    console.log(e.currentTarget[10].value);
    let cep = form[0].cep.value;
    var logradouro = "RUA";
    if(e.currentTarget[12].value == "RUA" || e.currentTarget[12].value == "AVENIDA" || e.currentTarget[12].value == "VIELA"){
        logradouro = form[0].logradouro.value;
    }
    let pais = form[0].pais.value;
    let bairro = form[0].bairro.value;
    let cidade = form[0].cidade.value;
 
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

$('#cep').change(function(){
    let cep = $('#cep')[0];
    if(cep.value.length == 8){
        //https://viacep.com.br/ws/06824140/json/unicode/?callback=endereco
        $.ajax({
            url : `https://viacep.com.br/ws/${cep.value}/json/`,
            type : 'get',
            contentType: "application/json"
        ,beforeSend : function(){
            console.log('Enviando...');
        }}).done(function(msg){
                console.log(msg);
                montarEndereco(msg);
        }).fail(function(jqXHR, textStatus, msg){
                console.log(msg);
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Algo deu errado!'
                  })
        });
    }else if(cep.value.length > 8){
        Swal.fire({
            type: 'info',
            title: 'Oops...',
            text: 'CEP Inválido ou formatação inválida, lembre-se sem pontuações.'
          })
    }
})

function montarEndereco(endereco){
    console.log(endereco);
    AA = endereco;
    let form = $('#form-cadastro-evento');
    form[0].logradouro.value = endereco.logradouro;
    form[0].cidade.value = endereco.localidade;
    form[0].uf.value = endereco.uf;
    form[0].bairro.value = endereco.bairro;
    form[0].complemento.value = endereco.complemento;
}