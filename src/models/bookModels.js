const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: String,
    author_id : {
        type : Number,
        required : true,
    },
    price : Number,
    rating : Number
    }, 
    
    
 {timestamps: true});  //Automatically created new keys in our database.

module.exports = mongoose.model('Book',bookSchema) // collection of Books in your database