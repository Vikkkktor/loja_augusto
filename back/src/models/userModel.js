const db = require('../config/db'); 


const criar = (nome, email, cpf, senha, callback) => {
  const insert = 'INSERT into usuarios (nome, email, cpf, senha) VALUES (?,?,?, ?)';
  const params = [nome, email, cpf, senha];

  db.run(insert, params, function(err){
    callback(err, this ? this.lastID : null);
  });
};

const buscarPorEmail = (email, callback) => {
  const query = 'SELECT * FROM usuarios WHERE email = ?';
  db.get(query, [email], (err, row) => {
    callback(err, row); 
  });
};


module.exports = { criar, buscarPorEmail };