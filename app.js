'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.use('/status', require('./controllers/status'));
router.use('/area', require('./controllers/area'));

app.use('/api', router);

mongoose.connect('mongodb://localhost/mentor');

app.listen(3000, () => {
    console.log('Listening on 3000...');
});
