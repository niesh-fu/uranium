const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book= req.body
    let authorId= book.author
    let publisherId= book.publisher
    //3(a)
    if(!authorId){
       return res.send({status: false, message: "Author id must be present in book details"}) 

       // 3(b)
       let author = await authorModel.findById(authorId)
       if(!author){

           return res.send({message: "Not a valid author id"})
       }
    }

    // 3(c)
    if(!publisherId){

        return res.send({message: "publisher id must be present in book details"})
    }

    // 3(d)

    let publisher  = await publisherModel.findById(publisherId)
        if(!publisher){
           return  res.send({message: "Not a valid publisher Id"})

        }
    
    let bookCreated= await bookModel.create(book)
     res.send({msg: bookCreated})
    }
    let fetchbooks = async function (req, res){
        let books = await bookModel.find().populate('author publisher')
        res.send({data : books })
    }



module.exports.createBook= createBook
module.exports.fetchbooks=fetchbooks
