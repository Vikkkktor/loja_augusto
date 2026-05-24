const express = require('express');
const cors = require('cors');
const userController = require('./src/controllers/userController');
const session = require('express-session')

const app = express();

app.use(cors()); 
app.use(express.json()); 

app.use(express.json());
    app.use(session({
        secret:"alguma-chave",
        resave: false,
    }))

app.post('/usuarios', userController.criarUsuario);
app.post('/login', userController.login);
app.get('/sessao', userController.checkSession);

module.exports = app;