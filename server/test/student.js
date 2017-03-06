'use strict';

const mongoose = require('mongoose');
const Student = require('../src/models/student');

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');

const should = chai.should();

chai.use(chaiHttp);

describe('Students', () => {
    beforeEach((done) => {
        Student.remove({}, (err) => {
            done();
        });
    });

    describe('GET /api/student', () => {
        it('should list students', (done) => {
            const student = new Student();
            student.name = 'Ivan';
            student.email = 'ivan@is.me';
            student.location = 'Yermak';
            student.save()
                .then(() => {
                    chai.request(app)
                        .get('/api/student')
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
                })
        });
    });
});
