const mongoose= require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
    success:{
        type:String,
        required:true,
        minlength:3
    },
    url:{
            type:String,
            required:true,
            minlength:3
        }

    
})

const User = new mongoose.model('Usercreation',UserSchema);

module.exports = User;