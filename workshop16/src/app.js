const { request } = require("express");
const express = require("express");
require("./db/conn");
const Book = require("./models/book")

const app = express();
const port = process.env.PORT || 8000


app.use(express.json());


app.post("/books",  (req, res) => {
        console.log(req.body);
        const user = new Book(req.body);
        user.save().then(()=>{
            res.send(user);
        }).catch((e)=>{
            res.send(e);
        })
    
})


app.post("/books", async (req, res) => {
     try {

         const user = new Book(req.body);
         const create = await user.save();
         res.send(user);
     } catch (e) {
         res.send(e);
     }
 })

 app.put("/books/:id", async (req, res) => {
    try {

        const id = req.params.id;
        
        const updatebook = await Book.findOneAndUpdate({_id:id},{
            $set:{
               bookname:req.body.bookname,
               authorname:req.body.authorname
            }
        })
        res.send(updatebook);
    } catch (e) {
        res.send(e);
    }



})

 app.get("/books" ,async(req,res)=>{
     try{
      const bookData = await Book.find();
      res.send(bookData);
     }catch(e){
        res.send(e);
     }
 })

 app.delete("/books/:id",async(req,res)=>{
     try{
        const id = req.params.id;
        const delbook = await Book.findByIdAndDelete(id)
        res.send(delbook);
     }
     catch(e){
        res.send(e);
     }

 })



app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})