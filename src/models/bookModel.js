const mongoose = require('mongoose'); // import package of mongoose

const bookSchema = new mongoose.Schema( { // invoke schema function of mongoos package
    bookName: String,  // bookschema
    authorName: String,
     category: String,
        year: Number,

}, { timestamps: true }); // is used to mark the timestamps in data base

module.exports = mongoose.model('book',bookSchema) // we export something that we have written above so that we enter in data base