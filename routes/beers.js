const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");

router.get("/", (req, res) => {
    res.render("beers.hbs")
});

router.get("/random-beer", (req, res) => {
    res.render("random-beer.hbs")
});



module.exports = router;