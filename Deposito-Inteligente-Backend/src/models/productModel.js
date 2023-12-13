const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    code: {type: String, unique: true, require: true},
    image: {type: String, require: true},
    price: {type: Number, require: true},
    quantity: {type: Number, require: true}
})

module.exports = mongoose.model('Product', productSchema)
