'use strict';

const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Post = require('../src/models/post');
const User = require('../src/models/user');

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const should = chai.should;

chai.use(chaiHttp);

describe('Feed', () => {
    let token;
    let userId;

    beforeEach(done => {
        Promise.all([
            Post.remove({}),
            User.remove({})
        ])
            .then(() => {
                const user = new User({
                    login: 'a'
                });

                return user.save();
            })
            .then(user => {
                token = jwt.sign({ id: user._id }, config.JwtSecret);
                userId = user._id;
                done();
            });
    });

    describe('GET /api/feed', () => {
        it('should return user\'s posts', done => {
            new Post({
                text: 'text1',
                userId: userId
            })
                .save()
                .then(() => {
                    return new Post({
                        text: 'text2',
                        userId: userId
                    })
                        .save();
                })
                .then(() => {
                    chai.request(app)
                        .get('/api/feed')
                        .set('Authorization', `JWT ${token}`)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('array');
                            res.body.should.have.deep.property('[0].text').eql('text2');
                            res.body.should.have.deep.property('[1].text').eql('text1');
                            done();
                        });
                })
                .catch(err => {
                    done();
                });
        });
    });
});
