'use strict';

process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const Mentor = require('../src/models/mentor');

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const should = chai.should();

chai.use(chaiHttp);

describe('Mentors', () => {
    beforeEach((done) => {
        Mentor.remove({}, (err) => {
            done();
        });
    });

    describe('POST /api/mentor', () => {
        it('should register a mentor', (done) => {
            const mentor = {
                login: 'mentor',
                password: 'pswd',
                name: 'ivan',
                email: 'email',
                areaIds: []
            };
            chai.request(app)
                .post('/api/mentor')
                .send(mentor)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Mentor registered');
                    done();
                });
        });
    });
});