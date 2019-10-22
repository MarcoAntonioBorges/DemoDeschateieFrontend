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
    $("#dataInicio")[0].textContent = evento.dataInicio;
    $("#dataFim")[0].textContent = evento.dataFim;
}