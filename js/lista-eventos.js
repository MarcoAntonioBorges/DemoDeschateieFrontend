const API_LISTA_EVENTOS = "https://deschateie.herokuapp.com/eventos/";
const USER_INPUT = $('#user');
var USER;

$(window).ready(function(){
    USER = JSON.parse(sessionStorage.getItem('user'));
    autenticar(USER);
    USER_INPUT.text('Olá, ' + USER.nome);
    carregarEventos();
});

function autenticar(usuario) { 
    console.log(usuario);
};


function carregarEventos(){
    $.ajax({
        url : API_LISTA_EVENTOS,
        type : 'get',
        contentType: "application/json",
        beforeSend : function(){
        console.log('Enviando...');
    }}).done(function(msg){
            console.log(msg);
            montarListaEventos(msg);
        }).fail(function(jqXHR, textStatus, msg){
            console.log(msg);
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Erro ao carregar!'
              })
    });
}

function montarListaEventos(lista) { 
    console.log(lista);
    let listaElement = $('#lista-eventos');
    
    lista.content.forEach(element => {
        listaElement.append(elementEvento(element.codigo, element.nome, element.descricao, element.dataInicio));
    });

}

function elementEvento(codigo, nome, descricao, dataInicio){
    var evento = `<div class='d-flex card-evento' onclick="descricaoEvento(${codigo})"> <div class='flex-grow-1'>
    <span value=${codigo} id="codigo">  
    <a>
        <h3>${nome}</h3>
      </a>
      <p>${descricao}</p>
      <span>${dataInicio[2]}/${dataInicio[1]}/${dataInicio[0]}</span>
    </div>
    <div class='manager flex-grow-2 d-flex  align-items-center '>
      <div>
        <a href='#'> <img src='images/edit.png' alt='editar evento' title='editar evento'> </a>
      </div>
      <div>
        <div> <a href='#'>
            <img src='images/cross.png' alt='excluir evento' title='excluir evento'></a>
        </div>
      </div>
    </div>
  </div>`


    return evento
}

async function descricaoEvento(codigo){
  console.log(codigo);

  let evento = await buscarEvento(codigo);
  console.log(evento);
  
  

  setTimeout(function(){window.location.href="../evento.html"}, 5000);
}

function buscarEvento(codigo){
  $.ajax({
    url : API_LISTA_EVENTOS + codigo,
    type : 'get',
    contentType: "application/json",
    beforeSend : function(){
    console.log('Enviando...');
}}).done(function(msg){
        console.log(msg);
        sessionStorage.setItem('evento', JSON.stringify(msg));
        return msg;
    }).fail(function(jqXHR, textStatus, msg){
        console.log(msg);
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Erro ao carregar!'
          })
});
}