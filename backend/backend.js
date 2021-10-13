const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config()

// optional packages
// const joi = require("joi")
// const bcrypt  = require("")
// const jwt = require("")
const port = process.env.PORT;

// data models
const district = require("./schema/districts");

// necessary middleware
var app = express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// connect to our database
mongoose.connect(
    `mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@clustertaxdata.e5kue.mongodb.net/TAXDATA?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log(err);
            console.log("Mongoose couldn't connect to the database.")
        }
        else {
            console.log("Mongoose successfully connected to the database.")
        }
    }
);


// REST API Endpoints
app.get("/", (req, res) => {
    res.send("Yay!! this works")
});

app.get("/query", async (req, res) => {
    console.log("Inside query call");
    try{
        const queried = await district.find({
            city: req.body.city,
            uc: req.body.uc
        });
        if(queried == null)
            throw "Object not found";
        console.log("sending response");
        res.status(200).json({"data": queried});
    }
    catch(err){
        console.log(err);
        res.json({"error": err});
    }
});

app.post("/add", async (req, res) => {
    console.log("inside add individual");
    try {
        console.log("Setting object");
        const new_data = new district({
            city: req.body.city,
            uc: req.body.uc,
            area: req.body.area,
            shape_area: req.body.shape_area,
            geometry: req.body.geometry,
            years: req.body.years
        });
        console.log("pushing object");
        const result = await new_data.save();
        console.log("done")
        res.status(200).json({
            msg: result
        });
    }
    catch (err) {
        console.log(err)
        res.json({ error: err });
    }
});


// Start Server
app.listen(port, () => {
    console.log(`Backend server is running on port: ${port}`);
})