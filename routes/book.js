let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect my router with my model
let Book = require('../models/book');

/* Read Operation */
router.get('/',async(req,res,next) => {
    try{
        const Booklist = await Book.find();
        res.render('Books/list',{
            title:'Books',
            Booklist:Booklist
        })
    }
    catch(err){
        console.log(err);
        res.render('Books/list',{
            error:'Error on Server'
        })
    }
})
/* Create Operation */

/* Update Operation */

/* Delete Operation */

module.exports = router;