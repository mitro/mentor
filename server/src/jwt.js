'use strict';

const config = require('config');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('./models/user');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: config.JwtSecret
};

const jwtStrategy = new JwtStrategy(options, (jwt, done) => {
    User.findOne({ _id: jwt.id})
        .then(user => {
            if (user) {
                done(null, user);
            }
            else {
                done(null, false);
            }
        })
        .catch(err => {
            done(err, false);
        });
});

passport.use(jwtStrategy);

module.exports = passport.authenticate('jwt', {session: false});