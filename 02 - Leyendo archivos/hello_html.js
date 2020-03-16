var http = require("http"),
    fs = require("fs");

// Esta funcion se ejecuta cada vez que se realiza una peticion!

http.createServer(function (req, res) {

    fs.readFile("./index.html", function (err, html) {

        res.writeHead(200,{"Content-Type":"application/json"});
        res.write(JSON.stringify({nombre:"Lucas Buteler",edad:"26"}));
        res.end();

    });
}).listen(8080);





