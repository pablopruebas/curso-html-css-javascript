/**
 * Js del juego.html
 */


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