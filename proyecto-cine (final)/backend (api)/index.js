const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json({ type: 'application/json' }));

const conexion = mysql.createConnection({
    host: 'localhost',
    database:'alquilerpeliculas',
    user: 'root',
    password: ''
});

conexion.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Conectado con el id ' + conexion.threadId);
});


app.get('/', function (req, res) {
    res.send('LA API ESTÁ CONECTADA CORRECTAMENTE')
});


// ESTAS SON LAS APIS PARA OBTENER (GET) Y PARA GUARDAR (POST)

// Ruta para obtener todas las películas
app.get('/peliculas', function (req, res) {
    const query = 'SELECT * FROM movie';
    conexion.query(query, function (err, results) {
        if (err) {
            console.error('error in query: ' + err.stack);
            res.status(500).send('Error en la consulta');
            return;
        }
        res.json(results);
    });
});


// Ruta para obtener todos los usuarios, podemos verificarlo con el navegador
app.get('/usuarios', function (req, res) {
    const query = 'SELECT * FROM user';
    conexion.query(query, function (err, results) {
        if (err) {
            console.error('error in query: ' + err.stack);
            res.status(500).send('Error en la consulta');
            return;
        }
        res.json(results);
    });
});

// Ruta para obtener todos los alquileres
app.get('/alquileres', function (req, res) {
    const query = 'SELECT * FROM rental';
    conexion.query(query, function (err, results) {
        if (err) {
            console.error('error in query: ' + err.stack);
            res.status(500).send('Error en la consulta');
            return;
        }
        res.json(results);
    });
});

//funcion (APIS) para guardar los datos, usamos la herramienta Postman.
app.post("/guardar_persona", function (req, res) {
    conexion.query(`INSERT INTO user
    (iduser, username, password)
    VALUES(?, ?, ?);
    `, [req.body.iduser, req.body.username, req.body.password], function (error, results, fields) {
        if (error) throw error;
        res.json({
            datos_usuarios: results
        });
    });
});

//funcion (APIS) para registrar persona, usamos la herramienta Postman.
app.post("/registro_persona", function (req, res) {
    conexion.query(`INSERT INTO registro
    (user, email, password)
    VALUES(?, ?, ?, ?);
    `, [req.body.user, req.body.email, req.body.password], function (error, results, fields) {
        if (error) throw error;
        res.json({
            datos_registro: results
        });
    });
});


//funcion (APIS)  para guardar las peliculas, usamos la herramienta Postman.
app.post("/guardar_pelicula", function (req, res) {
    console.log(req.body)
    conexion.query(`INSERT INTO movie
    (idmovie, title, genre, anio)
    VALUES(?, ?, ?, ?);
    `, [req.body.idmovie, req.body.titulo, req.body.genero, req.body.anio], function (error, results, fields) {
        if (error) throw error;
        res.json({
            datos_peliculas: results
        });
    });
});


//funcion (APIS) para guardar las rentas, usamos la herramienta Postman.
app.post("/guardar_renta", function (req, res) {
    conexion.query(`INSERT INTO rental
    (idrenta, iduser, idmovie, rent_date, return_date)
    VALUES(?, ?, ?, ?, ?);
    `, [req.body.idrenta, req.body.iduser, req.body.idmovie, req.body.rent_date, req.body.return_date], function (error, results, fields) {
        if (error) throw error;
        res.json({
            datos_renta: results
        });
    });
});


app.listen(3000);
console.log("Servidor iniciado en el puerto: " + 3000);