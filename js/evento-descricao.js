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