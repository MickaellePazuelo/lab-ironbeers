const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");

router.get('', function(req, res){
    res.json({ 'success' : true });
});

router.get("/beers", (req, res) => {
console.log(req.query);

beers.find(req.query)
.then((beersDocuments) => {
    res.render("beers.hbs", {
        beers:beersDocuments,
    });
})
.catch((error) =>
console.log(error));
});