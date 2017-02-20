'use strict';

const router = require('express').Router();
const Types = require('mongoose').Types;
const User = require('../models/user');
const Mentor = require('../models/mentor');

router.post('/', (req, res) => {
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
});

module.exports = router;
