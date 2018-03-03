// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 3001;

// Starts the server to begin listening

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

// Sets up the Express app to handle data parsing

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var tables = [
    {
        customerName: "Kent",
        customerEmail: "kentsEmail",
        customerPhoneNumber: "123-456-6789",
        // customerID:

    }
]

var waitList = [
    {

        customerName: "Quintessa",
        customerEmail: "QuintessasEmail",
        customerPhoneNumber: "123-456-7890",
        // customerID:

    }

]

var reservation = [
    {
        customerName: "Ozzy",
        customerEmail: "OzzysEmail",
        customerPhoneNumber: "123-456-7890",
        // customerID:
    }
]

// function CreateAreservation () {
// }

// function viewTables () {
// }


// Routes
// =============================================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "main.html"));
  });

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

//API's RECEIVING AND POSTING
// =============================================================


//Receiving JSON object for tables list
app.get("/api/tableslist", function(err, req, res) {
    if(err) throw err;

    var newTable = req.body;
    // Using a RegEx Pattern to remove spaces from newTable
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
    console.log(newTable);

    table.push(newTable);
    res.json(newTable);
  });


//Receiving JSON object for current waiting list 
app.get("/api/waitlist", function(err, req, res) {
    if(err) throw err;

    var neWaitList = req.body;

    newWaitList.routeName = newWaitList.name.replace(/\s+/g, "").toLowerCase();
    console.log(newWaitList);

    waitList.push(newWaitList);
    res.json(newWaitList);
  });


// Posting JSON Object for New Reservation Data
app.post("/api/reservationlist", function(err, req, res) {
    if(err) throw err;

    var newReservation = req.body;
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
    console.log(newReservation);

    reservation.push(newReservation);
    res.json(newReservation);
  });


//1 to deliver home page, 1 for main/tables (current tables reservation list, current waitlist) and 1 for making a reservation. done 
// api's: deliver json for tables, json for waitlist (these two return json) and an api to receive and post customer data to (this api will receive data)
//tables html needs two api one for current reservations and one for waitlist these will receive data.
