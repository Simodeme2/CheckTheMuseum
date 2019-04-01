/*
Import configuration
*/
import config from './config';

/*
Import the external libraries:
- http
- https
- express
- morgan
- chalk
- body-parser
- cors
- path
- ejs
*/
import http from 'http';
import https from 'https';
import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

/*
Import internal libraries
- apiV1Router
- logger
*/
import apiV1Router from './api/v1/routes';
import { logger } from './utilities';

// Morgan middleware
const morganMiddleware = morgan((tokens, req, res) => {
    return [
        '\n',
        chalk.hex('#ff4757').bold('🍄  Morgan --> '),
        chalk.hex('#34ace0').bold(tokens.method(req, res)),
        chalk.hex('#ffb142').bold(tokens.status(req, res)),
        chalk.hex('#ff5252').bold(tokens.url(req, res)),
        chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
        chalk.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
        chalk.yellow(tokens['remote-addr'](req, res)),
        chalk.hex('#fffa65').bold('from ' + tokens.referrer(req, res)),
        chalk.hex('#1e90ff')(tokens['user-agent'](req, res)),
        '',
    ].join(' ');
  });

// Cors options
const corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};

// Create the express application
const app = express();
app.use(morganMiddleware);
app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', keepExtensions: true }));
app.set('views', path.join(__dirname, 'views')); // Set the default views directory to views folder
app.set('view engine', 'ejs'); // Set the view engine to ejs
app.use('/static', express.static(path.join(__dirname, 'assets'))); // Set the assets folder as static
app.use('/api/v1', apiV1Router);

// Last route is 404
app.use((req, res, next) => {
    const error = new Error('Not found!');
    error.status = 404;
    next(error); 
});

// Global Application Error Handler
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    const obj = {
        error: {
            message: error.message,
            status: error.status,
            timestamp: new Date().getTime()
        }
    }
    
    if(req.xhr) {
        res.json(obj);
    } else {
        if(error.status === 404) {
            res.render('404', obj) 
        } else {
            res.render('error', obj)
        }
    }
});

// Create the http Node.js server
const httpServer = http.Server(app);

// Launch the http server: ip and port
httpServer.listen(config.nodePort, config.nodeHostname, () => {
    logger.log({ level: 'info', message: `Server is running at http://${config.nodeHostname}:${config.nodePort} !`});
});

// Export our app for testing purposes
export default app;