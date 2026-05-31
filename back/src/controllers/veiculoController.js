const veiculoModel = require('../models/veiculoModel');

const criarVeiculo = (req, res) => {
    const {usuarioId, marca, modelo, valor,  ano, km, combustivel, cambio, descricao } = req.body;
    const imagens = req.files;

    if (!imagens || imagens.length < 5){
        return res.status(400).json({ erro: "Você precisa enviar no mínimo 5 imagens"})
    }

    veiculoModel.criarVeiculo(usuarioId, marca, modelo, valor, ano, km, combustivel, cambio, descricao, (err, veiculoId) => {
        if(err){
            console.error(err);
            return res.status(500).json({ erro: "Erro ao cadastrar veiculo"});
        }

        const nomesImagens = imagens.map(imagem => imagem.filename);

        veiculoModel.salvarImagens(veiculoId, nomesImagens, (errorImg) => {
            if (errorImg){
                console.error(errorImg);
                return res.status(500).json({ erro: "Erro ao salvar imagens"})
            }
            
            res.status(201).json({mensagem: "Veiculo cadastrado com sucesso"})
        });
    });
};

const listarTodos = (req, res) => {
    veiculoModel.listarTodos((err, veiculos) => {
        if (err) return res.status(500).json({erro: "Erro ao buscar veiculos"});
        res.status(200).json(veiculos);
    });
};

const buscarPorId = (req, res) => {
    const {id} = req.params;
    veiculoModel.buscarPorId(id, (err, veiculo) => {
        if (err) return res.status(500).json({ erro:  "Erro ao buscar detalhes "});
        if (!veiculo) return res.status(404).json({ erro: "Veiculo não encontrado"});
        res.status(200).json(veiculo);
    });
};

module.exports = { criarVeiculo, listarTodos, buscarPorId };
