/**
 * Js del juego.html
 */



/**
 * Función para rellenar nick de usuario y src del avatar
 */
function rellenarFormularioUsuario(){
    document.getElementById('nick').value = nick;
    document.getElementById('avatarImg').src = avatarImg;
}

/**
 * Función para cambier el tamaño del grid.
 */
function pintarPanelJuego(){
    document.getElementById('juego').style.gridTemplateColumns = 'repeat('+tamano+', 1fr)'
    document.getElementById('juego').style.gridTemplateRows = 'repeat('+tamano+', 1fr)'
}


//Capturamos datos de usuario
getDatosUsuario();


/**
 * Si alguno de los parametro que hay que recoger del formulario no se rellenan, este if te lleva a la pag del formulario.
 * En caso de que algien acceda a la pagina del juego sin haber rellenado el formulario antes.
 */
if (!comprobacionDatosUsuario()){
    setTimeout(function() {
        location = "index.html";
    }, 100);
} 
console.log(comprobacionDatosUsuario());

//Rellenamos el formulario
rellenarFormularioUsuario();
pintarPanelJuego()