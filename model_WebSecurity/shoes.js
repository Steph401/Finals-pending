const { MongoServerClosedError, Int32 } = require('mongodb')
const mongoose = require('mongoose')

const shoesSchema = mongoose.Schema({
    prodID: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    categoryID: {
        type: String,
        required: true
    },
}
)
const Shoes = mongoose.model("shoes", shoesSchema, "shoes") 
module.exports = Shoes