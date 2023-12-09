'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/deposito');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const productRouter = require('../routers/productRouter');
const userRouter = require('../routers/userRouter');
const middlewareAuth = require('./middlewareAuth');

app.use(express.json());
app.use(middlewareAuth);
app.use(productRouter);
app.use(userRouter);

app.listen(PORT, () => {
    console.log('Seu servidor está online na porta', PORT);
});
