/**
 * Js del juego.html
 */


function getRandomInt (max){
    return Math.floor(Math.random() * max);
}


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
    //Elementos de forma automatica
    let items = '';
    let color = ['rojo', 'verde'];
    let colorRnd = 0;
    for (let index = 0; index < (parseInt(tamano)*parseInt(tamano)); index++) {
        if (index%2>0) colorRnd = getRandomInt(2);
        items+= `<div class="containerItem"><div class="item ${color[colorRnd]}"></div></div>`
        
    }
    document.getElementById('juego').innerHTML = items;
    console.log(items)
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