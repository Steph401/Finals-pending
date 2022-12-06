const { MongoServerClosedError, Int32 } = require('mongodb')
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    EncryptedProdID: {
        type: String,
        required: true
    },
    
    Name: {
        type: String,
        required: true
    },
    
    Image: {
        type: String,
        required: true
    },

    Price: {
        type: String,
        required: true
    },

    hashNoCategoryID: {
        type: String,
        required: true
    },

}
)
const Product = mongoose.model("product", productSchema, "product") 
module.exports = Product