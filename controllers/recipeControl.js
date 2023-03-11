//REQUIRE
//set up express


//require models


//RECIPE ROUTES

//delete
app.delete('/recipe/:id', (req, res) => {
    RecipeCard.findByIdAndRemove(req.params.id, (err, deletedResCard) => {
        res.json(deletedResCard);
    })
})
//create
// app.post('/recipe', (req, res) => {
//     RecipeCard.create(req.body).then((err, createdResCard) => {
//         res.json(createdResCard)
//     });
// })

app.post('/recipe', (req, res) => {
    RecipeCard.create(req.body, (err, createdResCard) => {
        res.json(createdResCard)
    });
})

//read/index
app.get('/recipe', (req, res) => {
    RecipeCard.find({}, (err, foundResCard) => {
        res.json(foundResCard)
    });
})
//update
app.put('/recipe/:id', (req, res) => {
    RecipeCard.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedResCard) => {
        res.json(updatedResCard)
    });
})



//EXPORT CONTROLLER/ROUTER

module.exports = router;