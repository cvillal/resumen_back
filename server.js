require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = mongoose.connection
const MONGODB_URI = process.env.MONGODB_URI
const app = express();
const ProductCard = require('./models/product.js');

//PORT//allows Heroku's port or own local port, depending on environment
const PORT = process.env.PORT

//this app is going to use:

app.use(express.json());
app.use(cors());


//CONNECT TO MONGO
mongoose.connect(MONGODB_URI)

// console.log(MONGODB_URI)

//Local database connection
// mongoose.connect('mongodb://localhost:27017/products', () => {
//     console.log('whatever')
// })


//ERROR catching
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//ROUTES


//test
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
 
//delete
app.delete('/prduct/:id', (req, res) => {
    ProductCard.findByIdAndRemove(req.params.id, (err, deletedProdCard) => {
        res.json(deletedProdCard);
    })
})
//create
// app.post('/product', (req, res) => {
//     ProductCard.create(req.body).then((err, createdProdCard) => {
//         res.json(createdProdCard)
//     });
// })

app.post('/product', (req, res) => {
    ProductCard.create(req.body, (err, createdProdCard) => {
        res.json(createdProdCard)
    });
})

//read/index
app.get('/product', (req, res) => {
    ProductCard.find({}, (err, foundProdCard) => {
        res.json(foundProdCard)
    });
})
//update
app.put('/product/:id', (req, res) => {
    ProductCard.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedProdCard) => {
        res.json(updatedProdCard)
    });
})


app.listen(PORT, () => {
    console.log('listening on port:', PORT)
});