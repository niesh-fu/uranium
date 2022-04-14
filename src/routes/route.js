const express = require('express');
const router = express.Router();

const allControlls=require("../controllers/allControlls")





router.post('/createNewAuthor', allControllers.createNewAuthor)
 router.post('/createNewBook', allControllers.createNewBook)
 router.post('/allBooks', allControllers.allBooks)
 router.get('/updateBookPrice', allControllers.updateaBookPrice)
 router.get('/authorsName', allControllers.authorsName)
 

module.exports = router;