const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

let patients = new Object();
patients["123456789"] = ["Jackson", "Walker", "678-987-2534"]
patients["987654321"] = ["Amajah", "Swaggard", "678-327-2904"]

let records = new Object();
records["123456789"] = "Status: Healthy"
records["987654321"] = "Status: Slight Cold"


// Get patient medical records 
app.get("/records", (req, res) => {


    // Verify Patient Exists
    if (records[req.headers.ssn] === undefined){
        res.status(404).send({"msg": "Patient not found."})
        return;
    };

    // Verifty SSN matches First and Last Name
    if (req.headers.firstname == patients[req.headers.ssn][0] && req.headers.lastname == patients[req.headers.ssn][1]) {
        // first last and ssn match

        if (req.body.reasonforvist === "medicalrecords") {
            //return medical records

            res.status(200).send(records[req.headers.ssn]);
        }
        else {
            // reutrn error
            res.status(501).send({"msg": "Unable to complete request at this time: " + req.body.reasonforvist})
            return;
        }
    }
    else {
        res.status(401).send({"msg": "First or last did not match"})
        return;
    }

    //Return Appropriate Record
    res.status(200).send({"msg": "HTTP GET - SUCCESS!"})
});

// Create a new patient
app.post("/", (req, res) => {
    
    // Create patient in database
    patients[req.headers.ssn] = [req.headers.firstname, req.headers.lastname, req.headers.phone]
    res.status(200).send({patients})
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