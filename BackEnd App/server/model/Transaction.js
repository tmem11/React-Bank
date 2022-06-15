const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Bank', { useNewUrlParser: true })
const Schema = mongoose.Schema


const transactionSchema = new Schema({
    vendor: String,
    category: String,
    amount: Number
})
const Transaction = mongoose.model('transaction', transactionSchema)



module.exports=Transaction



