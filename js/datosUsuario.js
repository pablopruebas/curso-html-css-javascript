
//JS para la gestion de datos de usuario

function datosUsuario(nick){
    sessionStorage.setItem('nick', nick.value);
}

function mostrarDatosUsuario(){
    let nick = sessionStorage.getItem('nick');
    console.log(nick);
}