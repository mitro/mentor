'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    login: String,
    password: String,
    name: String,
    email: String,
    location: String
});

module.exports = mongoose.model('Student', StudentSchema);
