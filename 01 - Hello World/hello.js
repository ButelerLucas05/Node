var http = require("http");

var manejador = function(solicitud,respuesta){

    // Aparece en consola
    console.log("Recibimos una peticion!");

    // Aparece en la pagina http 
    respuesta.end("Hola mundo");
};

var servidor = http.createServer(manejador);

// permite que se hagan peticiones a este servidor
servidor.listen(8080);

