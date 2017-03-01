'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    name: String,
    email: String,
    location: String
});

module.exports = mongoose.model('Student', StudentSchema);
