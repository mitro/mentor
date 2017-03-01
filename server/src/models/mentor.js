'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MentorSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    name: String,
    email: String,
    areaIds: [{type: Schema.Types.ObjectId, ref: 'Area'}]
});

module.exports = mongoose.model('Mentor', MentorSchema);
