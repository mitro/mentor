'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('config');
const morgan = require('morgan');

mongoose.Promise = global.Promise;
mongoose.connect(config.DbHost);

const app = express();

app.use(morgan('short'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.use('/status', require('./controllers/status'));
router.use('/area', require('./controllers/area'));
router.use('/mentor', require('./controllers/mentor'));
router.use('/student', require('./controllers/student'));
router.use('/auth', require('./controllers/auth'));

app.use('/api', router);

app.listen(3000, () => {
    console.log('Listening on 3000...');
});

module.exports = app;
