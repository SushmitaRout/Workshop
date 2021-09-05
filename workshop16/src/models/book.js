const mongoose= require("mongoose");
const validator = require("validator");

const BookSchema = new mongoose.Schema({
    bookname:{
        type:String,
        required:true,
        minlength:3
    },
    authorname:{
            type:String,
            required:true,
            minlength:3
        }

    
})


const setRecord = new mongoose.model('Books',BookSchema);

module.exports = setRecord;