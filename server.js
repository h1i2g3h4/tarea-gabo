require('dotenv').config(); // Para manejar variables de entorno
const express = require('express');
const path = require('path');
const chalk = require('chalk');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '456',
    database: 'mi_base_datos'
});

db.connect((err) => {
    if (err) {
        console.error(chalk.red('Error al conectar con la base de datos:'), err);
        return;
    }
    console.log(chalk.green('Conexión exitosa a la base de datos MySQL'));
});

// Ruta principal
app.get('/', (req, res) => {
    console.log(chalk.green('Acceso a la página principal'));
    res.render('index');
});

// Ruta para la página de login
app.get('/login', (req, res) => {
    console.log(chalk.blue('Acceso a la página de login'));
    res.render('login');
});

// Ruta para manejar el inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT username, email FROM users WHERE username = ? AND password = ?';

    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error(chalk.red('Error en la consulta:'), err);
            res.status(500).send('Error en el servidor');
        } else if (results.length > 0) {
            res.render('dashboard', { user: results[0] });
        } else {
            res.send('Credenciales incorrectas');
        }
    });
});

// Inicio del servidor
app.listen(PORT, () => {
    console.log(chalk.yellow(`Servidor ejecutándose en http://localhost:${PORT}`));
});

