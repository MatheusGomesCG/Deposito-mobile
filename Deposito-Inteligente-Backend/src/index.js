'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const http = require('http')
mongoose.connect('mongodb://127.0.0.1:27017/deposito');

const express = require('express');
const app = express();
const server = http.createServer(app)
const socketIo = require('socket.io')
const io = socketIo(server, {})

require('dotenv').config();

io.on('connection', (socket) => {
    socket.on('chat', (msg) => {
        io.emit('chat', msg)
    })
    socket.on('disconnect', () => {
        console.log('Dispositivo desconectado')
    })
})

const PORT = process.env.PORT || 3000;

const productRouter = require('../src/routers/productRouter');
const userRouter = require('../src/routers/userRouter');
const middlewareAuth = require('./services/middlewareAuth')

app.use(express.json());
app.use(middlewareAuth);
app.use(productRouter);
app.use(userRouter);

server.listen(PORT, () => {
    console.log('Seu servidor está online na porta', PORT);
});
