const MongoClient = require("mongodb");
 
// Connection URL
const url = 'mongodb://localhost:27017/';
 
// Database name
const databasename = "booksapi";
  
MongoClient.connect(url).then((client) => {
  const connect = client.db(databasename);
 
  // Connect to collection
  const collection = connect.collection("books");
 
  // Count the total documents
  collection.countDocuments().then((count_documents) => {
    console.log(count_documents);
  }).catch((err) => {
    console.log(err.Message);
  })
      
}).catch((err) => {
  // Printing the error message
  console.log(err.Message);
})