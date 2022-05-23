const express = require('express');

const router = express.Router();

const Product = require('../models/productModel')

router.get("/getallproducts", (req, res) => {
    Product.find({}, (err, docs) => {
        if(!err){
            return res.json(docs);
        } else {
            return res.status(404).json({message : "Something went wrong"});
        }
    })
});

module.exports = router