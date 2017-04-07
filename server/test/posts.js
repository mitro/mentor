'use strict';

const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../src/models/user');
const Post = require('../src/models/post');

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const should = chai.should;

chai.use(chaiHttp);

describe('Posts', () => {
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
                userId = user._id;

                token = jwt.sign({ id: user._id }, config.JwtSecret);
            })
            .then(() => {
                done();
            });
    });

    describe('POST /api/posts', () => {
        it('should create a post', done => {
            const post = new Post({
                text: '123456'
            });
            chai.request(app)
                .post('/api/posts')
                .set('Authorization', `JWT ${token}`)
                .send(post)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('text').eql('123456');
                    res.body.should.have.property('userId').eql(userId.toString());
                    done();
                });
        });
    });
});