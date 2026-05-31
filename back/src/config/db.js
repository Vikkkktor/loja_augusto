const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./banco.db', (err) => {
    if(err){
        console.error("Erro na conexão com o banco: ", err.message);
    }else{
        console.log("Conexão realizada com sucesso!");

        db.run('PRAGMA foreign_keys = ON');

        db.run(`CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            CPF VARCHAR(11) NOT NULL,
            senha TEXT NOT NULL)`);

        db.run(`CREATE TABLE IF NOT EXISTS veiculos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            usuarioId INTEGER NOT NULL,
            marca TEXT NOT NULL CHECK(marca IN ('Volvo', 'Mercedez-benz', 'Audi', 'Ford', 'Chevrolet', 'Volkswagen','Toyota', 'Fiat', 'Honda', 'Hyundai', 'BMW')),
            modelo TEXT NOT NULL,
            valor TEXT NOT NULL,
            ano TEXT NOT NULL,
            km TEXT NOT NULL,
            combustivel TEXT NOT NULL CHECK(combustivel IN ('Alcool', 'Gasolina', 'Diesel')),
            cambio TEXT NOT NULL CHECK(cambio IN ('Manual', 'Automatico')),
            descricao TEXT,
            FOREIGN KEY (usuarioId) REFERENCES usuarios (id)
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS imagensVeiculos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            veiculoId INTEGER NOT NULL,
            caminhoImagem TEXT NOT NULL,
            FOREIGN KEY (veiculoId) REFERENCES veiculos (id)
        )`);
    }
}); 

module.exports = db;