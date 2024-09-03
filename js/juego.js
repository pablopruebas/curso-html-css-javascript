
//Capturamos datos de usuario
getDatosUsuario();
//Comprobamos los datos
if (!comprobacionDatosUsuario()){
    setTimeout(function() {
        location = "index.html";
    }, 100);
} 
console.log(comprobacionDatosUsuario());