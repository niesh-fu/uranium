const authorModule = require('../models/authorsModule')
const bookModels = require('../models/bookModels')
const bookDetails = require('../models/bookModels')

const createNewAuthor = async function (req, res) {
    const reqAuthor= req.body;
    const savedData = await authorModel.create(reqAuthor)
    res.send({msg: savedData});
}

const createNewBook = async function (req, res) {
    const reqBook= req.body;
    const saved = await bookModel.create(reqBook)
    res.send({msg: saved});
}

const allBooks = async function (req, res) {
    const authorDetails = await authorModule.find({author_name: "Chetan Bhagat"})
    const id = authorDetails[0].author_id
    const bookName = await bookModel.find({author_id: id}).select({name:1})
    res.send({msg: bookName});
}


const updateBookPrice= async function (req, res) {
    const bookDetails = await bookrModule.find({name: "Two states"})
    const id = bookDetails[0].author_id
    const authorName = await authorModel.find({author_id: id}).select({author_name:1, _id:0})
    const bookName = bookDetails[0].name
    const updatePrice = await bookModel.findOneAndUpdate({name:bookName},{price:100},{new:true}).select({price:1,_id:0})
    res.send({msg: authorName,updatePrice});
}

const authorName= async function (req, res) {
    const bookId = await bookrModule.find({price:{$gte:50,$lte:100}}).select({author_id:1, _id:0})
    const id = booksId.map(inp =>inp.author_id)
    
    res.send({msg: authorName});
}
