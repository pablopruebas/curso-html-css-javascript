/**
 * js para la creación de datos de usuario
 * @author Pablo <pacodemi2000@hotmail.com>
 * {@link https://github.com/pablopruebas/curso-html-css-javascript Github}
 */

var nick;
var tamano;
var email;
var geolocalizacionTxt;

/**
 * SessionStorage
 * @param {HTMLElement} nick nick del usuario
 * @param {HTMLElement} tamano tamaño del panel
 * @param {HTMLElement} email email del usuario
 */


function datosUsuario(nick, tamano, email){
    sessionStorage.setItem('nick', nick.value);
    sessionStorage.setItem('tamano', tamano.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('geolocalizacionTxt', geolocalizacionTxt);
}


function getDatosUsuario(){
    nick = sessionStorage.getItem('nick');
    tamano = sessionStorage.getItem('tamano');
    email = sessionStorage.getItem('email');
}

/**
 * comprueba si se ha rellenado el apartado nick y sono crea una nueva key en sessionStorage
 * @returns devuelve un true para que no se aplique la parte del código donde te devuelve a la página inicial
 */
function comprobacionDatosUsuario(){
    if (nick==null){
        sessionStorage.setItem('error', 'No se ha rellenado correctamente el formulario');
        return false;
    }
    return true;
}

/**
 * Geolocalización (posición actual)
 */
function datoGeolocalizacion(){
    if (!navigator.geolocation){
        geolocalizacionTxt = "El navegador no es compatible con API Geolocation";
    }else{
        navigator.geolocation.getCurrentPosition(
            //Exito
            (position)=>{geolocalizacionTxt = "Latitud:" + position.coords.latitude + ", longitud:" + position.coords.longitude},
            //Error
            ()=>{geolocalizacionTxt = "La geolicalización no se ha podido realizar";}
        )
    }
}

/**
 * Con esta función se obtiene el local storage con la key historico, que es un JSON (string)
 * @param {HTMLElement} nick nick del usuario introducido
 */
function historicoUsuarios (nick){
    let historicoStorage = localStorage.getItem('historico');
    let historico;
    if (historicoStorage==null){
        historico = [];
    }else{
        historico = JSON.parse(historicoStorage);
    }
    let registroUsuario={
        usuario:nick.value,
        fecha:Date.now()
    }
    historico.push(registroUsuario);
    localStorage.setItem('historico', JSON.stringify(historico)); //JSON.stringify() se usa para hacer string un objeto??
}
