var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var tables = [
    {
    }
]

function CreateAreservation () {
    AJAX.post();
}

function viewTables () {
    AJAX.Get();
}