const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName: {type:String, require:true
    },
    price:{indianPrice:Number, europeanPrice:Number},

    authorName: String,
    totalPages:Number,
    tags:[String],
    stockAvailable :Boolean
    
}, {timestamps: true});  //Automatically created new keys in our database.

module.exports = mongoose.model('Book',bookSchema) // collection of Books in your database