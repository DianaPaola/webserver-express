const http = require('http');


//todo esto se hace mas corto con express
http.createServer((req, resp) => {

    resp.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {

            nombre: 'Diana',
            edad: 28,
            url: req.url

        }
        /* resp.write('Hola Mundo');
        resp.end();*/
    resp.write(JSON.stringify(salida));
    resp.end();

}).listen(8080);

console.log('Escuchando el puerto 8080');