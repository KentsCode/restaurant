// Dependencies
// =============================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 8000;

// Starts the server to begin listening

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

// Sets up the Express app to handle data parsing

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// include html routes and the app passed into the certain function which is express
require('./app/routing/html-routes.js')(app);
require('./app/routing/api-routes.js')(app);


// Routes
// =============================================================

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "main.html"));
//   });

// app.get("/reservation", function(req, res) {
//     res.sendFile(path.join(__dirname, "reservation.html"));
// });

// app.get("/tables", function(req, res) {
//     res.sendFile(path.join(__dirname, "tables.html"));
// });

//API's RECEIVING AND POSTING
// =============================================================


//Receiving JSON object for tables list
// =============================================================

// app.get("/api/tables", function(err, req, res) {
//     if(err) throw err;

//     var newTable = req.body;
//     // Using a RegEx Pattern to remove spaces from newTable
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
//     console.log(newTable);

//     table.push(newTable);
//     res.json(newTable);
//   });


//Receiving JSON object for current waiting list 
// =============================================================

// app.get("/api/waitlist", function(err, req, res) {
//     if(err) throw err;

//     var neWaitList = req.body;

//     newWaitList.routeName = newWaitList.name.replace(/\s+/g, "").toLowerCase();
//     console.log(newWaitList);

//     waitList.push(newWaitList);
//     res.json(newWaitList);
//   });


// Posting JSON Object for New Reservation Data
// =============================================================
// Your POST route should also respond to requests with a confirmation (true or false) of whether or not the requestor has a reservation (or is on the waiting list).

// app.post("/api/tables", function(err, req, res) {
//     if(err) throw err;

//     var newReservation = req.body;
//     newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
//     console.log(newReservation);

//     reservation.push(newReservation);
//     res.json(newReservation);
//   });


// Converting Form Data Into JSON objects
// =============================================================

//Front end has to use jquery to grab the data objects to display

