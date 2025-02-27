const express = require('express')
const app = express()
const port = process.env.PORT|| 5000
const cors = require('cors')

//middlware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Mongodb configuracion

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mern-book-store:12345678aA@cluster0.nopzuti.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    //Crear coleccion
    const booksColections =  client.db("BookInventory").collection("books");

    //Insertar un libro a db: post method

    app.post("/upload-book", async(req, res)=> {
        const data = req.body;
        const result = await booksColections.insertOne(data);
        res.send(result); 
    })
    //get all books from the database
    //Obtener todas los libros procedente de database
   /* app.get("/all-books", async(req, res)=>{
       const books = booksColections.find();
       const result = await books.toArray();
       res.send(result);
    })*/

    //cargar libro
    //update a book database
    app.patch("/book/:id", async(req, res)=>{
       const id = req.params.id;
       //console.log(id);
       const updateBookData = req .body;
       const filter = {_id: new ObjectId(id)};
       

       const updateDoc = {
        $set: {
          ...updateBookData
        }
       }
       const options = { upsert: true };
       //cargar
       //update
       const result = await booksColections.updateOne(filter, updateDoc, options);
       res.send(result);

      })
      //Delete
      //Borrar
      app.delete("/book/:id", async(req, res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await booksColections.deleteOne(filter);
      res.send(result);

    })
    //find by category
    app.get("/all-books", async(req, res)=>{
      let query = {};
      if(req.query?.Category){
        query = {Category:req.query.Category}
      }
      const result = await booksColections.find(query).toArray();
      res.send(result);
    })
    //to get single book data
    app.get("/book/:id",async(req, res)=>{
      const id= req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await booksColections.findOne(filter);
      res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})