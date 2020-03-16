let http = require("http"),
    fs = require("fs");

// Esta funcion se ejecuta cada vez que se realiza una peticion!

http.createServer(function (req, res) {

    fs.readFile("./index.html", function (err, html) {

        // Se ultiliza para cambiar el archivo de binario a string
        let html_string = html.toString();
        let variables = html_string.match(/[^\{\}]+(?=\})/g);
        let nombre = "Lucas Buteler";

        for (let i = variables.length -1 ; i >= 0 ; i--) {
          
            
            let  value = eval(variables[i]);
            
            html_string = html_string.replace("{"+variables[i]+"}" ,value);
        };


        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(html_string);
        res.end();

    });
}).listen(8080);
