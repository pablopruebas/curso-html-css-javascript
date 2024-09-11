/**
 * Documento js donde captamos el evento submit tras rellenar el formulario, con el cual cambiamos de página
 */

var nickInput;
var tamanoInput;
var emailInput;
var formEntrada;
var error;
var avatarItems;
var itemImg;
var avatarCont;


//Funciones de evento (formulario y funciones sesion y local storage)

function comprobarForm (event) {
    //comprobar cambios
    if (nickInput.value.match(/(?<!\S)[0-9]/)) {
        console.log("No hay nick");
        nickInput.focus();
        event.preventDefault();
        error.innerText = "El campo de nick no puede comenzar por un número"
        return false;
        
    } else if (tamanoInput.value == "0") {
        console.log("No has seleccionado tamaño del panel");
        tamanoInput.focus();
        event.preventDefault();
        error.innerText = "Se debe seleccionar una tamaño de panel"
        return false;
    }
    //Informacion es correcta
    datosUsuario(nickInput, tamanoInput, emailInput);
    historicoUsuarios (nickInput);
    return true;
}


function moviendoImg(event){
    itemImg=event.target;
    console.log(itemImg.src)
}
function cambiarImg(event){
    avatarCont.src = itemImg.src;
}

/**
 * Carga de objetos del DOM, co probaciones y formulario
 */
function domCargado (){
    nickInput = document.getElementById('nick');
    tamanoInput = document.getElementById('tamano');
    emailInput = document.getElementById('email');
    formEntrada = document.getElementById('formEntrada');
    error = document.getElementById('error');
    //Comprobar si hay algún error en juego.html
    if (sessionStorage.getItem('error') != null){
        error.innerText = sessionStorage.getItem('error');
        sessionStorage.removeItem('error');
    }
    formEntrada.addEventListener('submit', comprobarForm);

    avatarItems = document.getElementsByClassName('avatarImgItem')
    //Eventos del D&D (Drag and drop)`
    for(let item of avatarItems){
        item.addEventListener('dragstart', moviendoImg)
    }
    avatarCont=document.getElementById('avatarImg')
    avatarCont.addEventListener('dragover', e=> {e.preventDefault()})
    avatarCont.addEventListener('drop', cambiarImg)
}





//Inicio de carga de evento
document.addEventListener('DOMContentLoaded', domCargado);


datoGeolocalizacion();