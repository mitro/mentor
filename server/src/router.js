'use strict';

const Router = require('express').Router;

const apiRouter = Router();
const statusRouter = Router();
const authRouter = Router();
const mentorRouter = Router();
const studentRouter = Router();
const areaRouter = Router();

const status = require('./controllers/status');
const auth = require('./controllers/auth');
const mentors = require('./controllers/mentors');
const students = require('./controllers/students');
const areas = require('./controllers/areas');

const requireJwt = require('./jwt');

module.exports = function (app) {
    statusRouter.get('/', status.status);

    authRouter.post('/login', auth.login);

    mentorRouter.get('/', requireJwt, mentors.list);
    mentorRouter.post('/', mentors.create);

    studentRouter.get('/', requireJwt, students.list);
    studentRouter.post('/', students.create);

    areaRouter.get('/', areas.list);

    apiRouter.use('/status', statusRouter);
    apiRouter.use('/auth', authRouter);
    apiRouter.use('/mentors', mentorRouter);
    apiRouter.use('/students', studentRouter);
    apiRouter.use('/areas', areaRouter);

    app.use('/api', apiRouter);
}