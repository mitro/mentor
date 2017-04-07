'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('config');
const morgan = require('morgan');
const passport = require('passport');

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

router(app);

app.listen(3000, () => {
    console.log('Listening on 3000...');
});

module.exports = app;
