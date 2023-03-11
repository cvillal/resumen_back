//REQUIRE
//set up express


//require models


//PRODUCT ROUTES

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



//EXPORT CONTROLLER/ROUTER

module.exports = router;