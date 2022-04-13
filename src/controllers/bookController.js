const bookModels = require("../models/bookModels.js")
// 1. to create a new entry..use this api to create 11+ entries in your collection

const createBook= async function (req, res) {
    let booksData= req.body
    let savedData = await bookModels.create(booksData)
    res.send({msg: savedData});
};

const bookList= async function (req, res) {
    const bookList = await bookModels.find().select({bookName : 1 ,autherName : 1, _id : 0})
    res.send({msg: bookList});
};

const getBookInYear = async function (req, res) {
    let data= req.body
    let savedData = await bookModels.find(data)
    res.send({msg: savedData})
};

const getXINRBooks = async function (req, res) {
    let allINRBooks = await bookModels.find({"price.Indian":{$in:[100,200,500]}});
    res.send({msg: allINRBooks});
};

const getRandomBooks = async function (req, res) {
    let randomBooks = await bookModels.find({
        $or: [{ stockAvailable: true}, {totalPages: {$gt: 500}}]

    });
    res.send({msg: randomBooks});
};

const getParticularBooks = async function (req, res) {
    let random = req.body
    let allBooks = await bookModels.find(random)
    
    res.send({msg: allBooks});

}

module.exports.createBook= createBook
module.exports.bookList=bookList;
module.exports.getBookInYear=getBookInYear;
module.exports.getXINRBooks=getXINRBooks;
module.exports.getRandomBooks=getRandomBooks
module.exports.getParticularBooks=getParticularBooks