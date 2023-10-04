const express = require("express");
const bodyParser = require("body-parser")

const mongoose = require("mongoose");
const crypto = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors")
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

const jwt = require("jsonwebtoken")

// mongodb+srv://filipjovicccc:<password>@cluster0.siv1ig2.mongodb.net/

mongoose.connect("mongodb+srv://filipjovicccc:antropomorfni@cluster0.siv1ig2.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("Conected to MongoDB")
}).catch((err)=> {
    console.log("Error conecting to MongoDb", err)
})

app.listen(port, ()=> {
    console.log("Server is running on port", port)
})


