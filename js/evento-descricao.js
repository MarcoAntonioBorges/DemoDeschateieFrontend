const USER_INPUT = $('#user');
const USER = JSON.parse(sessionStorage.getItem('user'));
const EVENTO = JSON.parse(sessionStorage.getItem('evento'));

$(window).ready(function(){
    autenticar(USER);
    USER_INPUT.text('Olá, ' + USER.nome);
    console.log(EVENTO);
    
});

function autenticar(usuario) { 
    console.log(usuario);
};



