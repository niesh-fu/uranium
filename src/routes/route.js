const express = require('express');
const router = express.Router();

const BookControlls=require("../controllers/bookController")





router.post("/createBook", BookControlls.createBook )
 router.get("/getBookData", BookControlls.getBookData)
 

module.exports = router;