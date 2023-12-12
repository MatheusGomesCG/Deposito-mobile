const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleError = (res, status, message) => {
    res.status(status).json({ message });
};

const createUser = async (req, res) => {
    try {
        const { login, email } = req.body;
        const findResult = await UserModel.findOne({ $or: [{ login }, { email }] });

        if (findResult) {
            handleError(res, 409, 'Usuário já existe');
        } else {
            const createResult = await UserModel.create(req.body);
            res.status(201).json({ message: `O usuário ${createResult._doc.login} foi criado com sucesso!` });
        }
    } catch (err) {
        handleError(res, 403, 'Não foi possível criar o usuário');
    }
};

const loginUser = async (req, res) => {
    try {
        const { login, password } = req.body;
        const user = await UserModel.findOne({ login });

        if (!user) {
            return handleError(res, 401, 'Usuário não encontrado');
        }

        // Aqui, você deve verificar a senha. Exemplo: se (user.password !== password)
        if (user.password !== password) {
            return handleError(res, 401, 'Senha incorreta');
        }

        // Gerar o token JWT
        const token = jwt.sign({ userId: user._id }, process.env.SECRET, { expiresIn: '1h' });

        res.json({ message: 'Login bem-sucedido', token });
    } catch (error) {
        handleError(res, 500, 'Erro no servidor');
    }
};

module.exports = {
    login: async (req, res) => {
        try {
            const result = await UserModel.findOne({ login: req.body.login, password: req.body.password });
            if (result) {
                const secret = process.env.secret;
                const tokenResult = await jwtService.sign(req.body, secret);
                res.status(200).json({ message: "Usuário logado", token: tokenResult });
            } else {
                handleError(res, 403, 'Credenciais inválidas');
            }
        } catch (err) {
            handleError(res, 403, err.message);
        }
    },
    getUsers: (req, res) => {
        UserModel.find({}).select(["-__v", "-_id"]).then((result) => {
            res.status(200).json(result);
        }).catch(() => {
            handleError(res, 500, "Não foi possível recuperar os usuários");
        });
    },
    deleteUserById: async (req, res) => {
        try {
            await UserModel.deleteOne({ email: req.params.id });
            res.status(200).send({ message: "Usuário removido com sucesso!" });
        } catch (err) {
            handleError(res, 500, "Não foi possível remover usuário");
        }
    },
    getUser: async (req, res) => {
        try {
            const result = await UserModel.findOneAndUpdate({ email: req.params.email }, req.body, { new: true });
            res.status(200).send({ message: "Usuário atualizado com sucesso!" });
        } catch {
            handleError(res, 500, "Não foi possível atualizar os dados");
        }
    },
    createUser,
    search: async (req, res) => {
        try {
            const result = await UserModel.findOne({ email: req.params.email });
            if (result) {
                res.status(200).json(result);
            } else {
                handleError(res, 404, 'Usuário não encontrado');
            }
        } catch (err) {
            handleError(res, 500, 'Erro ao buscar usuário');
        }
    },
    update: async (req, res) => {
        try {
            const result = await UserModel.findOneAndUpdate({ email: req.params.email }, req.body, { new: true });
            if (result) {
                res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
            } else {
                handleError(res, 404, 'Usuário não encontrado ou nenhum campo modificado');
            }
        } catch (err) {
            handleError(res, 500, 'Erro ao atualizar usuário');
        }
    },
    loginUser,
};
