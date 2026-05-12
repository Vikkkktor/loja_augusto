const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json()); 

const db = new sqlite3.Database('./banco.db', (err) => {
    if(err){
        console.error("Erro na conexão com o banco: ", err.message);
    }else{
        console.log("Conexão realizada com sucesso!");

        db.run(`CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            CPF VARCHAR(11) NOT NULL,
            senha TEXT NOT NULL)`);
    }
}); 

app.post('/usuarios', (req, res) => {
  const novoUsuario = {
    nome, email, cpf, senha
  } = req.body;

  const insert = 'INSERT into usuarios (nome, email, cpf, senha) VALUES (?,?,?, ?)';
  const params = [nome, email, cpf, senha];

  db.run(insert, params, function(err){
    if(err){
        return res.status(400).json({erro: "Erro ao cadastrar"})
    }
    res.status(201).json({
            id: this.lastID,
            nome,
            email,
            cpf
        });
  });
});

app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
});