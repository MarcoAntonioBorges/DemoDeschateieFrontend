const USER_INPUT = $('#user');
const USER = JSON.parse(sessionStorage.getItem('user'));
const EVENTO = JSON.parse(sessionStorage.getItem('evento'));

$(window).ready(function(){
    autenticar(USER);
    USER_INPUT.text('Olá, ' + USER.nome);
    montarEventos(EVENTO);    
});

function autenticar(usuario) { 
    console.log(usuario);
};



function montarEventos(evento){
    console.log($("#nome"));
    $("#nome")[0].textContent = evento.nome;
    $("#descricao")[0].textContent = evento.descricao;
    $("#dataInicio")[0].textContent = formataData(evento.dataInicio);
    $("#dataFim")[0].textContent = formataData(evento.dataFim);
    $("#capacidade")[0].textContent = evento.capacidade;
    $("#tipo")[0].textContent = evento.tipo;
    $("#isGratuito")[0].textContent = evento.isGratuito?"Gratuito":"Pago";
    if(evento.foto != null){
        $("#foto")[0].src = evento.foto;
    }
}

function formataData(data) { 
    return `${data[2]}/${data[1]}/${data[0]}`;
 }