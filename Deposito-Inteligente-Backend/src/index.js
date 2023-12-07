'use strict'

require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/deposito')

const express = require('express')
const app = express()

const PORT = process.env.port || 3000

const userRouter = require('../src/routers/userRouter')
const productRouter = require('../src/routers/productRouter')

app.use(express.json())
app.use(userRouter)
app.use(productRouter)

app.listen(PORT, () => {
    console.log('Seu servidor está online na porta', PORT)
})