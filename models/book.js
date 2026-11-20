const { default: mongoose, Collection } = require("mongoose");

let bookModel = mongoose.Schema({
    name: String,
    author:String,
    published:String,
    description:String,
    price:Number
},
{
    Collection:"books"
});
module.exports=mongoose.model('Book',bookModel);
