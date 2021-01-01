/*
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require("body-parser");
const hostname = '127.0.0.1';
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

//mongoose.connect("mongodb+srv://admin:Tech123@cluster0.an6w8.mongodb.net/Sample?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

const uri = "mongodb+srv://admin:Tech123@cluster0.an6w8.mongodb.net/Sample?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("Sample").collection("Basic");
    console.log('works fine')
    client.close();
});

const reviewsSchema = {
    name: String,
    email: String,
    mobile: String,
    rating: String,
    message: String

}

const Review = mongoose.model("Review", reviewsSchema);


app.get("/", function(req, res) {
    console.log('----------------');
    res.sendFile(__dirname + "/Review.html");

})

app.post("/", function(req, res) {
    let newReview = new Review({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        rating: req.body.rating,
        message: req.body.message
    });
    newReview.save();
    res.redirect("/");
})

app.listen(port, hostname, () => {
    console.log(`Server is started at http://${hostname}:${port}`);
});
*/