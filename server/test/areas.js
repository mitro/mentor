'use strict';

const mongoose = require('mongoose');
const Area = require('../src/models/area');

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');

chai.use(chaiHttp);

describe('Areas', () => {
    beforeEach(done => {
        Area.remove({}, err => done());
    });

    describe('GET /api/areas', () => {
        it('should list areas', done => {
            const area = new Area({
                name: 'Software'
            });

            area.save()
                .then(() => {
                    chai.request(app)
                        .get('/api/areas')
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('array');
                            res.body.should.have.deep.property('[0]._id');
                            res.body.should.have.deep.property('[0].name').eql('Software');
                            done();
                        });
                })
                .catch(err => done());
        });
    });
});
