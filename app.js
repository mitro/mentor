'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mentor');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.use('/status', require('./controllers/status'));
router.use('/area', require('./controllers/area'));
router.use('/mentor', require('./controllers/mentor'));
router.use('/student', require('./controllers/student'));

app.use('/api', router);

app.listen(3000, () => {
    console.log('Listening on 3000...');
});
