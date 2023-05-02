const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

let patients = new Object();
patients["999991234"] = ["Jackson", "Walker", "678-987-2534"]
patients["999994321"] = ["Amajah", "Swaggard", "678-327-2904"]

let records = new Object();
records["999991234"] = "Status: Healthy"
records["999994321"] = "Status: Slight Cold"


// Get patient medical records 
app.get("/", (req, res) => {
    res.status(200).send({"msg": "HTTP GET - SUCCESS!"})
});

// Create a new patient
app.post("/", (req, res) => {
    res.status(200).send({"msg": "HTTP POST - SUCCESS!"})
});


// Update existing patient phone number
app.put("/", (req, res) => {
    res.status(200).send({"msg": "HTTP PUT - SUCCESS!"})
});



// Delete patient records 
app.delete("/", (req, res) => {
    res.status(200).send({"msg": "HTTP DELETE - SUCCESS!"})
});



app.listen(3000);