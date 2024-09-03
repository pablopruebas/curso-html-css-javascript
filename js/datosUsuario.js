
//JS para la gestion de datos de usuario

var nick;
var tamano;
var email;
var geolocalizacionTxt;

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

function comprobacionDatosUsuario(){
    if (nick==null){
        sessionStorage.setItem('error', 'No se ha rellenado correctamente el formulario');
        return false;
    }
    return true;
}

//Geolocalizacion
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

//localStorage
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
