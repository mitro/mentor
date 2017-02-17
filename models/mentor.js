'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MentorSchema = new Schema({
    login: String,
    password: String,
    name: String,
    email: String,
    areaIds: [{type: Schema.Types.ObjectId, ref: 'Area'}]
});

module.exports = mongoose.model('Mentor', MentorSchema);
