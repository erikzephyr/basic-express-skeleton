"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.status(200).send('Hello World!');
});
module.exports = app;
