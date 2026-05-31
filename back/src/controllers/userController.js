const userModel = require('../models/userModel');

const criarUsuario = (req, res) => {
    const { nome, email, cpf, senha } = req.body;

    userModel.criar(nome, email, cpf, senha, (err, lastID) => {
        if(err){
            console.error("ERRO DO SQLITE AO CADASTRAR USUÁRIO:", err);
            return res.status(400).json({erro: "Erro ao cadastrar"})
        }
        
        res.status(201).json({
            id: lastID,
            nome,
            email,
            cpf
        });
    });
    };

const login = (req, res) => {
        const { email, senha } = req.body;

        userModel.buscarPorEmail(email, (err, usuario) => {
            if (err) {
                return res.status(500).json({ erro: "Erro interno no servidor" });
            }
            
            if (!usuario) {
                return res.status(404).json({ erro: "Usuário não encontrado" });
            }

            if (usuario.senha !== senha) {
                return res.status(401).json({ erro: "Senha incorreta" });
            }

            req.session.user = { 
                id: usuario.id, 
                nome: usuario.nome, 
                email: usuario.email 
            };

            res.status(200).json({ mensagem: "Login realizado com sucesso!", user: req.session.user });
        });
    };

const checkSession = (req, res) => {
        if (req.session.user) {
            res.status(200).json({ logado: true, user: req.session.user });
        } else {
            res.status(401).json({ logado: false, mensagem: "Nenhum usuário logado." });
        }
    };

module.exports = { criarUsuario, login, checkSession };