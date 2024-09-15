/**
 * Js del juego.html
 */

//VARIABLES GLOBALES
var iniciadoMarcado = false;
var adyacentes=[];
var tamanoPanel;

function getRandomInt (max){
    return Math.floor(Math.random() * max);
}


/**
 * Función para rellenar nick de usuario y src del avatar
 */
function rellenarFormularioUsuario(){
    document.getElementById('nick').value = nick;
    document.getElementById('avatarImg').src = avatarImg;
    tamanoPanel = parseInt(tamano);
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
        items+= `<div class="containerItem"><div id="${index}" class="item ${color[colorRnd]}"></div></div>`
        
    }
    document.getElementById('juego').innerHTML = items;
    console.log(items)
}


/**
 * Calcula el array de los adyacentes
 * @param {*} idMarcado 
 */
function calcularAdyacentes(idMarcado){
    adyacentes=[]
    //Adyacente superior
    if ((idMarcado-tamanoPanel)>=0) adyacentes.push(idMarcado-tamanoPanel);
    //Adyacente inferior
    if ((idMarcado+tamanoPanel)<(tamanoPanel*tamanoPanel)) adyacentes.push(idMarcado+tamanoPanel);
    //Adyacente izquierda
    if ((idMarcado%tamanoPanel)>0) adyacentes.push(idMarcado-1);
    //Adyacente derecha
    if (((idMarcado+1)%tamanoPanel)>0) adyacentes.push(idMarcado+1);

    for (let index = 0; index < adyacentes.length; index++) {
        console.log(adyacentes);
        
        
    }
}


/**
 * Añadir los eventos al juego
 */
function programarEventosJuego(){
    const items = document.getElementsByClassName('item')
    for (let item of items){
        item.addEventListener('mousedown', comenzarMarcar);
        item.addEventListener('mouseover', continuarMarcando);
    }
    document.addEventListener('mouseup', finalizarMarcado);
}


/*FUNCIONES DEL JUEGO*/

/**
 * Iniciar el marcado de los dots
 * @param {*} event 
 */
function comenzarMarcar(event){
    let item = event.target;
    let containerItem = event.target.parentElement;
    if(item.classList.contains('rojo')) containerItem.classList.add('rojo');
    else containerItem.classList.add('verde')
    containerItem.classList.add()
    if(!iniciadoMarcado) iniciadoMarcado = true;
    console.log('se ha pinchado sobre un círculo')
}

/**
 * Continuar marcado de los dots
 * @param {*} event 
 */
function continuarMarcando(event){
    if (iniciadoMarcado){
        let item = event.target;
        let containerItem = event.target.parentElement;
        if(item.classList.contains('rojo')) containerItem.classList.add('rojo');
        else containerItem.classList.add('verde')
        containerItem.classList.add();

        //test
        calcularAdyacentes(parseInt(item.id))
    }
    console.log('Pasando sobre un circulo');
}


/**
 * Finalizar el marcado de los dots
 * @param {*} event 
 */
function finalizarMarcado(event){
    iniciadoMarcado=false;
    console.log('Finalizar el marcado');
}




/**
 * MAIN
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

//Rellenamos el formulario
rellenarFormularioUsuario();
pintarPanelJuego()
programarEventosJuego()