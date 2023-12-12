const fs = require('fs');

const productModel = require('../models/productModel');

const finalizeCart = async (req, res) => {
    try {
        const cartItems = req.body; // Supondo que cartItems seja um array de objetos { productId, quantity }

        for (const item of cartItems) {
            const product = await ProductModel.findById(item.productId);
            if (product) {
                // Verifica se há quantidade suficiente
                if (product.quantity < item.quantity) {
                    return res.status(400).json({ message: "Quantidade insuficiente em estoque para o produto " + product.name });
                }

                // Atualiza a quantidade do produto
                product.quantity -= item.quantity;
                await product.save();
            } else {
                return res.status(404).json({ message: "Produto não encontrado: " + item.productId });
            }
        }

        res.status(200).json({ message: 'Compra finalizada com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao processar a compra', error: error.message });
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
    },
    finalizeCart,
};

module.exports = productController;
