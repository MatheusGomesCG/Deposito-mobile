const fs = require('fs');

const productModel = require('../models/productModel');

const search = async (req, res) => {
    try {
        const results = await ProductModel.find({});
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produtos', error: error.message });
    }
};

const productController = {
    changeAvatar: async (req, res) => {
        try {
            if (!req.body.code) {
                return res.status(400).json({ message: 'Código do produto não fornecido' });
            }

            const product = await productModel.findOne({ code: req.body.code });

            if (!product) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }

            if (!req.file) {
                return res.status(400).json({ message: 'Nenhum arquivo enviado' });
            }

            const avatarPath = `avatars/${req.body.code}_${req.file.originalname}`;
            fs.writeFileSync(avatarPath, req.file.buffer);

            product.avatar = avatarPath;
            await product.save();

            res.status(200).json({ message: 'Avatar carregado com sucesso' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao processar a solicitação' });
        }
    },

    search: async (req, res) => {
        try {
            const result = await productModel.find({});
            res.status(200).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao recuperar produtos' });
        }
    },

    searchOne: async (req, res) => {
        try {
            const result = await productModel.findOne({ code: req.params.code });
            res.status(200).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao recuperar produto' });
        }
    }
};

module.exports = productController;
