const express = require('express');
const router = express.Router();
//const bookModels = require("../models/bookModels")
const bookController= require("../controllers/bookController")

router.post('/createBooks', bookController.createBook); 
 router.get('/bookList', bookController.bookList);
 router.post('/getBookInYear', bookController.getBookInYear);
 router.get('/bookXINRBooks', bookController.getXINRBooks);
 router.get('/getRandomBooks', bookController.getRandomBooks);
 router.post('/getParticularBooks', bookController.getParticularBooks)

module.exports = router;