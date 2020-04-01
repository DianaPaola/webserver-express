const express = require('express');
const app = express(); //nos permite usar express
const hbs = require('hbs'); //nos premite reutilizar cierto codigo
require('./hbs/helpers');

//middleware--> es un callback que se va a ejecutar siempre que se haga una petición a la pagina
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales'); //directorio que va a contener todos mis parciales
app.set('view engine', 'hbs');
require('./hbs/helpers');

//VARIABLES DE ENTORNO GLOBALES HEROKU 
//para tomar el puerto que nos dé heroku
const port = process.env.PORT || 3000;


//hay que tener cuidado cuando hacemos las dos, cuando hacemos el middleware y la peticion get cosas a la vez xq dependiendo del interprete va a mostrar una cosa o la otra
/*app.get('/', (req, res) => {


    let salida = { //formato json

        nombre: 'Diana',
        edad: 28,
        url: req.url

    }
    res.send(salida);
});*/

/*app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Diana',
        anio: new Date().getFullYear()
    }); //renderiza el archivo home.hbs
});

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    }); //renderiza el archivo home.hbs
});*/

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'diana'
    });
});

app.get('/about', (req, res) => {

    res.render('about'); //renderiza el archivo home.hbs
});


app.get('/data', (req, res) => {

    res.send('Hola data :p');
});

app.listen(port, () => {

    console.log(`Escuchando peticiones en el puerto ${ port }`);
});