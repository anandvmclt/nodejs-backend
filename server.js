const express = require('express');
const bodyparser = require("body-parser");
const app = express()
var dbConnection = require('./db.js')
var productsRoute = require('./routes/productRoute')

app.use(bodyparser.json());
app.use('/api/products', productsRoute)

app.get("/", (req,res) => {
    res.send("This is from back end")
})

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server is ruuing on http://127.0.0.1:${port}`));