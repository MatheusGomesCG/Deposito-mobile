const express = require('express');
const productController = require('../controllers/productController.js');
const productRouter = express.Router();

productRouter.route('/api/product')
    .get((req, res) => productController.search(req, res))
    .post((req, res) => productController.create(req, res));

productRouter.route('/api/product/:code')
    .get((req, res) => productController.searchOne(req, res))


module.exports = productRouter;
