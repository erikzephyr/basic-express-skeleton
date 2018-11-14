"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Load environment variables from .env file, where API keys and passwords are configured
// Controllers (route handlers)
var homeController = require("./app/controllers/home.controller");
var welcomeApiController = require("./api/controllers/welcome.api.controller");
// API keys and Passport configuration
// import * as passportConfig from './config/passport';
// Create Express server
var app = express();
// Connect to MongoDB
// Express configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../app/views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/**
 * Primary app routes.
 */
app.get('/', homeController.index);
/**
 * API examples routes.
 */
app.get('/api', welcomeApiController.welcomeMSG);
/**
 * OAuth authentication routes. (Sign in)
 */
exports.default = app;
