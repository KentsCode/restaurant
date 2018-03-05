var tableData = require("../data/tables-data");
var waitListData = require("../data/waitinglist-data");

module.exports = function(app) {
    app.get("/api/tables", function(err, req, res) {
        if(err) throw err;
        res.json(tableData);
      });
      

      app.get("/api/waitlist", function(err, req, res) {
        if(err) throw err;
        res.json(waitListData)
      });
        

    app.post("/api/tables", function(err, req, res) {
        if(err) throw err;

        if(tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else{

            res.json(false);
            waitListData.push(req.body);
            res.json(false);
        }

     
      });

      app.post("api/new", function(req, res) {
        var newTable = req.body;
        // Using a RegEx Pattern to remove spaces from newTable
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
        console.log(newTable);
    
        tableArray.push(newTable);
        res.json(newTable);

        var neWaitList = req.body;
        
            newWaitList.routeName = newWaitList.name.replace(/\s+/g, "").toLowerCase();
            console.log(newWaitList);
        
            waitListArray.push(newWaitList);
            res.json(newWaitList);
      })

      app.post("/api/clear", function() {
        // Empty out the arrays of data
        tableData = [];
        waitListData = [];
    
        console.log(tableData);
      });

}

// var newReservation = req.body;
// newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
// console.log(newReservation);

// reservationArray.push(newReservation);
// res.json(newReservation);