import * as express from 'express';
import compression from 'compression';
import * as bodyParser from 'body-parser';
import dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from .env file, where API keys and passwords are configured

// Controllers (route handlers)
import * as homeController from './app/controllers/home.controller';
import * as welcomeApiController from './api/controllers/welcome.api.controller';

// API keys and Passport configuration
// import * as passportConfig from './config/passport';

// Create Express server
const app = express();

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

export default app;
