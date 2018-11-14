"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan = require("morgan");
var app = express();
var port = 3001;
app.use(express.json());
app.use(morgan("combined"));
app.listen(port, function () {
    console.log("Express running on port " + port + ".");
});
