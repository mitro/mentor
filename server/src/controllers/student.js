'use strict';

const User = require('../models/user');
const Student = require('../models/student');

module.exports.list = (req, res) => {
    Student.find({})
        .then((users) => {
            res.json(users);
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
            const student = new Student();

            student.userId = user._id;
            student.name = req.body.name;
            student.email = req.body.email;
            student.location = req.body.location;

            return student.save();
        })
        .then(() => {
            res.json({
                message: 'Student registered'
            });
        })
        .catch((err) => {
            res.send(err);
        });
};
