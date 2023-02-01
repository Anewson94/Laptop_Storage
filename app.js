// "Express";
const express = require("express");
const app = express();

// ("Body Parser");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist/js"));

// ("EJS");
const ejs = require("ejs");
app.set("view engine", "ejs");

app.use(express.json());

const sass = require('sass');


const port = 3000

app.get("/", function(req, res) {
    res.render("index")
})


app.listen(port, function(){
    console.log("Page Active");
})