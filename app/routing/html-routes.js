var path = require("path");

module.exports = function (app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/main.html"));
      });

    app.use( function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/main.html"));
      });

    //when user selects url http://localhost:3001/reservation use file path send them the correct page
    app.get("/reservation", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/reservation.html"));
    });
    
    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/tables.html"));
    });

}