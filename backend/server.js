const express = require('express');
const cors = require('cors');
const data = require('./productsItems.js')
const app = express();
app.use(cors());
app.get("/api/products", (req, res) => {
    res.send(data);
});

app.listen(5000, () =>{
    console.log("serve at http://localhost:5000");
});