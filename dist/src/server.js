"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3001;
app.listen(port, function () {
    console.log("Express running on port " + port + ".");
});
