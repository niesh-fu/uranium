
const BookModel= require ("../models/bookModel")
//1. createBook : to create a new entry..use this api to create 11+ entries in your collection

const createBook= async function (req, res) {
    let booksData= req.body
    let savedData= await BookModel.create(booksData)
    res.send({msg: savedData})
}
// 2. bookList : gives all the books- their bookName and authorName only 
const bookList = async function (req, res) {
    let allBooks = await BookModel.find().select({bookName: 1,authorName: 1, _id: 0});
    res.send({msg: allBooks});
}
//3. getBooksInYear: takes year as input in post request and gives list of all books published that year
const getBooksInYear = async function (req, res){
    let date = req.body.year
    // console.log(date);
    let listOfAllBooks = await BookModel.find({year: {$eq: date}})
    res.send({msg: listOfAllBooks});
}
/*getParticularBooks:- (this is a good one, make sincere effort to solve this) 
take any input and use it as a condition to fetch books that satisfy that condition
e.g if body had { name: “hi”} then you would fetch the books with this name
if body had { year: 2020} then you would fetch the books in this year
hence the condition will differ based on what you input in the request body*/
const getParticularBooks = async function (req, res) {
    let random = req.body
    let allBooks = await bookModel.find(random)
    res.send({msg: allBooks});

}
//5. getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
const getXINRBooks = async function(req, res) {
    let allINRBooks = await bookModel.find({"prices.Indian": {$in:[100,200,500]}});
    res.send({msg: allINRBooks});
    
}
//6. getRandomBooks - returns books that are available in stock or have more than 500 pages 
const getRandomBooks = async function (req, res) {
    let randomBooks = await bookModel.find( { 
        $or: [ { stockAvailable: true} , {totalPages: { $gt: 500}}]
     });
    res.send({msg: randomBooks});
}





module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks