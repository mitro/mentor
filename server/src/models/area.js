'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AreaSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Area', AreaSchema);
