'use strict';

const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

module.exports.login = (req, res) => {
    const login = req.body.login;
    const password = req.body.password;

    User.findOne({login: login})
        .then((user) => {
            if (!user || user.password !== password){
                res.status(401).json({
                    message: 'User not found'
                });
            }

            const payload = {id: user._id};
            var token = jwt.sign(payload, config.JwtSecret, { expiresIn : 12 * 60 * 60 });

            res.json({
                message: 'ok',
                token: token
            });
        })
        .catch((err) => {
            res.send(err);
        });
};
