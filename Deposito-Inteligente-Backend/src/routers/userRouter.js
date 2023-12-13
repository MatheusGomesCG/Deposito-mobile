const express = require('express');
const userController = require('../controllers/userController.js');
const userRouter = express.Router();

userRouter.route('/api/user')
    .post((req, res) => userController.createUser(req, res))
    .get((req, res) => userController.getUsers(req, res));

userRouter.route('/api/user/:email')
    .get((req, res) => userController.search(req, res))
    .put((req, res) => userController.update(req, res))
    .delete((req, res) => userController.deleteUserById(req, res));

userRouter.route('/api/user/auth')
    .post((req, res) => userController.loginUser(req, res));

userRouter.post('/api/user/recuperar-senha', (req, res) => {
        userController.recuperarSenha(req, res);
});

module.exports = userRouter;
