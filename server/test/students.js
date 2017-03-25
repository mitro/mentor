'use strict';

const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Student = require('../src/models/student');
const User = require('../src/models/user');

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');

const should = chai.should();

chai.use(chaiHttp);

describe('Students', () => {
    let token;

    beforeEach((done) => {
        Promise.all([
            Student.remove({}),
            User.remove({})
        ])
            .then(() => {
                const user = new User({
                    login: 'a'
                });

                return user.save();
            })
            .then(user => {
                token = jwt.sign({id: user._id}, config.JwtSecret);
            })
            .then(() => {
                done();
            });
    });

    describe('GET /api/students', () => {
        it('should list students', (done) => {
            const student = new Student();
            student.name = 'Ivan';
            student.email = 'ivan@is.me';
            student.location = 'Yermak';
            student.save()
                .then(() => {
                    chai.request(app)
                        .get('/api/students')
                        .set('Authorization', `JWT ${token}`)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('array');
                            res.body.should.have.deep.property('[0]._id');
                            res.body.should.have.deep.property('[0].name').eql('Ivan');
                            res.body.should.have.deep.property('[0].email').eql('ivan@is.me');
                            res.body.should.have.deep.property('[0].location').eql('Yermak');
                            done();
                        });
                })
                .catch((err) => {
                    done();
                });
        });
    });
});
