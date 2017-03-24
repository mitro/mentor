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
const mentor = require('./controllers/mentor');
const student = require('./controllers/student');
const area = require('./controllers/area');

module.exports = function (app) {
    statusRouter.get('/', status.status);

    authRouter.post('/login', auth.login);

    mentorRouter.get('/', mentor.list);
    mentorRouter.post('/', mentor.create);

    studentRouter.get('/', student.list);
    studentRouter.post('/', student.create);

    areaRouter.get('/', area.list);

    apiRouter.use('/status', statusRouter);
    apiRouter.use('/auth', authRouter);
    apiRouter.use('/mentor', mentorRouter);
    apiRouter.use('/student', studentRouter);
    apiRouter.use('/area', areaRouter);

    app.use('/api', apiRouter);
}