/**
 * Documento js donde captamos el evento submit tras rellenar el formulario, con el cual cambiamos de página
 */

const nickInput = document.getElementById('nick');
const tamanoInput = document.getElementById('tamano');
const emailInput = document.getElementById('email');
const formEntrada = document.getElementById('formEntrada');
const error = document.getElementById('error');

//Comprobar si hay algún error en juego.html
if (sessionStorage.getItem('error') != null){
    error.innerText = sessionStorage.getItem('error');
    sessionStorage.removeItem('error');
}

//Funciones de evento

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


//Inicio de carga de evento

formEntrada.addEventListener('submit', comprobarForm);

datoGeolocalizacion();