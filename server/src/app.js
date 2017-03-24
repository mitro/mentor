'use strict';

const express = require('express');
const jwt = require('express-jwt');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('config');
const morgan = require('morgan');

const router = require('./router');

mongoose.Promise = global.Promise;
mongoose.connect(config.DbHost);

const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

app.use(morgan('short'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(jwt({secret: 'doitagain'}).unless(req => {
    console.log(req.originalUrl + ' ' + req.method);
    return (
        req.originalUrl == '/api/auth/login' ||
        req.originalUrl == '/api/area' && req.method == 'GET' ||
        req.originalUrl == '/api/mentor' && req.method == 'POST' ||
        req.originalUrl == '/api/mentor' && req.method == 'OPTIONS' ||
        req.originalUrl == '/api/student' && req.method == 'POST' ||
        req.originalUrl == '/api/student' && req.method == 'OPTIONS'
    );
}));

router(app);

app.listen(3000, () => {
    console.log('Listening on 3000...');
});

module.exports = app;
