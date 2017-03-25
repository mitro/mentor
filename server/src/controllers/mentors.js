'use strict';

const Types = require('mongoose').Types;
const User = require('../models/user');
const Mentor = require('../models/mentor');

module.exports.list = (req, res) => {
    Mentor.find({})
        .populate('areaIds')
        .then((mentors) => {
            mentors = mentors.map((mentor) => {
                return {
                    _id: mentor._id,
                    name: mentor.name,
                    email: mentor.email,
                    areas: mentor.areaIds.map((area) => area.name)
                }
            });
            res.json(mentors);
        })
        .catch((err) => {
            res.send(err);
        });
};

module.exports.create = (req, res) => {
    const user = new User();

    user.login = req.body.login;
    user.password = req.body.password;

    user.save()
        .then(() => {
            const mentor = new Mentor();

            mentor.userId = user._id;
            mentor.name = req.body.name;
            mentor.email = req.body.email;
            mentor.areaIds = req.body.areaIds.map((id) => Types.ObjectId(id));

            return mentor.save();
        })
        .then(() => {
            res.json({
                message: 'Mentor registered'
            });
        })
        .catch((err) => {
            res.send(err);
        });
};
