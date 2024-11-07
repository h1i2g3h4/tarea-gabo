// server.js

const express = require('express');
const path = require('path');
const chalk = require('chalk'); // Para colorear los mensajes en consola

const app = express();
const PORT = 3000;

// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    console.log(chalk.green('Acceso a la página principal')); // Mensaje en verde
    res.render('index'); // Renderiza index.ejs
});

// Ruta para la página de login
app.get('/login', (req, res) => {
    console.log(chalk.blue('Acceso a la página de login')); // Mensaje en azul
    res.render('login'); // Renderiza login.ejs
});

// Inicio del servidor
app.listen(PORT, () => {
    console.log(chalk.yellow(`Servidor ejecutándose en http://localhost:${PORT}`)); // Mensaje en amarillo
});

