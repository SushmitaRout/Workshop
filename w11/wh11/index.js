const express = require('express');
const fs =require('fs')
const multer= require("multer");
const path = require('path');

const app = express();

const storage=multer.diskStorage({
    destination: './upload/images',
    filename:(req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload= multer(
    {
        storage: storage,
        limits:{fieldSize:1000}
    }
)
app.use('/profile',express.static('upload/images'))


app.post('/upload',upload.single('profile'),(req,res) =>{
    res.json({
        success:1,
        url: `http://localhost:4000/profile/${req.file.filename}`
    })
})


app.delete('/url:',(req,res,next)=>{
    res.send('deleted successful')
})


app.listen(4000,()=>{
    console.log("server up and running");
})