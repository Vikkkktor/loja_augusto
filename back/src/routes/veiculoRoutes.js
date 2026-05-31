const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const veiculoController = require('../controllers/veiculoController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'veiculos/'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.array('imagens', 20), veiculoController.criarVeiculo);

module.exports = router;