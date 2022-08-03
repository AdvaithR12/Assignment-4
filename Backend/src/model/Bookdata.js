const mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost:27017/Books', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    bookId : Number,
    bookName : String,
    bookCode : String,
    releaseDate : String,
    description : String,
    price : Number,
    starRating :Number,
    imageUrl : String
});

var Bookdata = mongoose.model('book', NewBookSchema); 

module.exports = Bookdata;