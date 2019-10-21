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
    
}

function elementEvento(){
  //   var evento = "<div class="d-flex card-evento"> <div class="flex-grow-1">
  //     <a href="evento.html">
  //       <h3>Nome do Evento</h3>
  //     </a>
  //     <p>Descrição do Evento</p>
  //     <span>10/11/2019</span>
  //   </div>
  //   <div class="manager flex-grow-2 d-flex  align-items-center ">
  //     <div>
  //       <a href="#"> <img src="images/edit.png" alt="editar evento" title="editar evento"> </a>
  //     </div>
  //     <div>
  //       <div> <a href="#">
  //           <img src="images/cross.png" alt="excluir evento" title="excluir evento"></a>
  //       </div>
  //     </div>
  //   </div>
  // </div>"

}