let http = require("http"),
    fs = require("fs");

// Esta funcion se ejecuta cada vez que se realiza una peticion!

http.createServer(function (req, res) {

    fs.readFile("./index.html", function (err, html) {


        if(req.url.indexOf("favicon.icon") > 0 ){return;}


        // Se ultiliza para cambiar el archivo de binario a string
        let html_string = html.toString();
        let variables = html_string.match(/[^\{\}]+(?=\})/g);
        let arreglo_parametros;

        if (req.url.indexOf("?") >0 ){

            var url_data = req.url.split("?");
            var arreglo_parametros = url_data[1].split("&");

        }
        for (let i = variables.length -1 ; i >= 0 ; i--) {
          
            
            let  value = eval(variables[i]);
            
            html_string = html_string.replace("{"+variables[i]+"}" ,value);
        };


        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(html_string);
        res.end();

    });
}).listen(8080);
