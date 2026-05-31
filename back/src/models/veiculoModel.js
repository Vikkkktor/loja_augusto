const db = require('../config/db'); 

const criarVeiculo = (usuarioId, marca, modelo, valor, ano, km, combustivel, cambio, descricao, callback) => {
    const insert = `INSERT INTO veiculos (usuarioId, marca, modelo, valor, ano, km, combustivel, cambio, descricao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;  
    const params = [usuarioId, marca, modelo, valor, ano, km, combustivel, cambio, descricao];
  
    db.run(insert, params, function(err){
    callback(err, this ? this.lastID : null);
  });
};

const salvarImagens = (veiculoId, nomesImagens, callback) => {
    if (nomesImagens.length === 0) return callback(null);

    const placeholders = nomesImagens.map(() => '(?, ?)').join(', ');
    const insert = `INSERT INTO imagensVeiculos (veiculoId, caminhoImagem) VALUES ${placeholders}`;

    const params = [];
    nomesImagens.forEach(nome => {
        params.push(veiculoId, nome);
    });

    db.run(insert, params, function(err) {
        callback(err);
    });
};

const listarTodos = (callback) => {
    const get = `
        SELECT v.*, 
               (SELECT caminhoImagem FROM imagensVeiculos WHERE veiculoId = v.id LIMIT 1) as capa
        FROM veiculos v
    `;
    db.all(get, [], callback);
};

const buscarPorId = (id, callback) => {
    const getVeiculo = `SELECT * FROM veiculos WHERE id = ?`;
    db.get(getVeiculo, [id], (err, veiculo) => {
        if (err || !veiculo)  return callback(err, null);

        const getImagens = `SELECT caminhoImagem FROM imagensVeiculos WHERE veiculoId = ?`;
        db.all(getImagens, [id], (err, imagens) => {
            if (err) return callback(err, null);

            veiculo.imagens = imagens.map(img => img.caminhoImagem)
            callback(null, veiculo);
        });
    });
};



module.exports = { criarVeiculo, salvarImagens, listarTodos, buscarPorId };