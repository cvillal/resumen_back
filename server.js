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

//MIDDLEWARE?this app is going to use:

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
 

//LISTEN ON PORT
app.listen(PORT, () => {
    console.log('listening on port:', PORT)
});