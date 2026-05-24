const sqlite3 = require('sqlite3').verbose();

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

module.exports = db;