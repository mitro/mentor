'use strict';

const router = require('express').Router();
const jwt = require('jsonwebtoken');

const User = require('../models/user');

router.post('/login', (req, res) => {
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
            var token = jwt.sign(payload, 'doitagain');

            res.json({
                message: 'ok',
                token: token
            });
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router;
