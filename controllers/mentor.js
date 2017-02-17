'use strict';

const router = require('express').Router();
const Types = require('mongoose').Types;
const Mentor = require('../models/mentor');

router.post('/', (req, res) => {
    const mentor = new Mentor();

    mentor.login = req.body.login;
    mentor.password = req.body.password;
    mentor.name = req.body.name;
    mentor.email = req.body.email;
    mentor.areaIds = req.body.areaIds.map((id) => Types.ObjectId(id));

    mentor.save()
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
