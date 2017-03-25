'use strict';

process.env.NODE_ENV = 'test';

const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Mentor = require('../src/models/mentor');
const User = require('../src/models/user');
const Area = require('../src/models/area');

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const should = chai.should();

chai.use(chaiHttp);

describe('Mentors', () => {
    let token;

    beforeEach((done) => {
        Promise.all([
            Mentor.remove({}),
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
            })
            .then(() => {
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

    describe('GET /api/mentor', () => {
        it('should list mentors', (done) => {
            const mlArea = new Area();
            mlArea.name  = "Machine learning";
            const webArea = new Area();
            webArea.name = "Web development";

            Promise.all([
                mlArea.save(),
                webArea.save()
            ])
                .then(() => {
                    const mentor = new Mentor();
                    mentor.name = 'Vikentiy';
                    mentor.email = 'vik@email.me';
                    mentor.areaIds = [mlArea._id, webArea._id]
                    return mentor.save();
                })
                .then(() => {
                    chai.request(app)
                        .get('/api/mentor')
                        .set('Authorization', `JWT ${token}`)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('array');
                            res.body.should.have.deep.property('[0]._id');
                            res.body.should.have.deep.property('[0].name').eql('Vikentiy');
                            res.body.should.have.deep.property('[0].email').eql('vik@email.me');
                            res.body.should.have.deep.property('[0].areas[0]').eql('Machine learning');
                            res.body.should.have.deep.property('[0].areas[1]').eql('Web development');
                            done();
                        });
                })
                .catch((err) => {
                    done();
                });
       });
    });
});