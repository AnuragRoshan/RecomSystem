const router = require("express").Router();
const list = require("../Models/listSchema");




// add to watchlist
app.post("/SaveWishlist", (req, res) => {
    const wish = new Wishlist(req.body)
    wish.save().then( () => {
        res.status(201).send("Wish Added to Wishlist!");
    }).catch( (e) => {
        res.status(400).send(e);
    })
})