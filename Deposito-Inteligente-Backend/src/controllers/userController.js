const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Função para manipular erros
const handleError = (res, status, message) => {
    res.status(status).json({ message });
};

const recuperarSenha = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'E-mail não encontrado' });
        }

        // Gerar um token seguro
        const resetToken = crypto.randomBytes(20).toString('hex');
        // Gerar um JWT com data de expiração
        const resetTokenJWT = jwt.sign({ id: user._id, token: resetToken }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Salvar o token e a data de validade no banco de dados
        user.resetPasswordToken = resetTokenJWT;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hora
        await user.save();

        // URL para redefinição de senha (ajuste conforme necessário)
        const resetUrl = `http://frontend-url/reset-password/${resetTokenJWT}`;

        // Envie o e-mail com o link (implementação do NodeMailer como antes)

        res.status(200).json({ message: 'E-mail de recuperação enviado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao processar a solicitação' });
    }
};

const createUser = async (req, res) => {
    try {
        const { login, email, password} = req.body;

        if (!login || !email || !password) {
            return res.status(400).json({ message: 'Por favor, preencha todos os campos obrigatórios' });
        }

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'Já existe um usuário com este email' });
        }

        const newUser = new userModel({ login, email, password });
        await newUser.save();

        res.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao processar a solicitação' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { login, password } = req.body;
        const user = await userModel.findOne({ login });

        if (!user) {
            return handleError(res, 401, 'Usuário não encontrado');
        }

        if (user.password !== password) {
            return handleError(res, 401, 'Senha incorreta');
        }

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
    loginUser,
    recuperarSenha,
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
};