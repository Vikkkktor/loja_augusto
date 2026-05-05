const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Armazenamento das mensagens (em memória) 
let mensagens = [
{ id: 1, texto: "Crud funfando" }
];

// Rota GET - retorna todas as mensagens
app.get('/mensagens', (req, res) => {
res.json(mensagens);
});

// Rota POST - adiciona uma nova mensagem
app.post('/mensagens', (req, res) => {
const novaMensagem = {
id: mensagens.length + 1,
texto: req.body.texto
};

mensagens.push(novaMensagem);
res.status(201).json(novaMensagem); // Retorna a mensagem criada
});
// Inicia o servidor
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
});