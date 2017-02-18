'use strict';

const router = require('express').Router();
const Student = require('../models/student');

router.post('/', (req, res) => {
    const student = new Student();

    student.login = req.body.login;
    student.password = req.body.password;
    student.name = req.body.name;
    student.email = req.body.email;
    student.location = req.body.location;

    student.save()
        .then(() => {
            res.json({
                message: 'Student registered'
            });
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router;
