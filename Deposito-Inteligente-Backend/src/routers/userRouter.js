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

userRouter.route('/api/auth')
    .post((req, res) => userController.login(req, res));

module.exports = userRouter;
