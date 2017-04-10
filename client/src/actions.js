import { push } from 'react-router-redux';
import cookie from 'react-cookie';

import publicApi from './utils/publicApi';
import protectedApi from './utils/protectedApi';

export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';
export const RECEIVE_MENTORS = 'RECEIVE_MENTORS';
export const RECEIVE_AREAS = 'RECEIVE_AREAS';
export const PROCESS_LOGIN_SUCCESS = 'PROCESS_LOGIN_SUCCESS';
export const PROCESS_LOGIN_FAILURE = 'PROCESS_LOGIN_FAILURE';

function receiveStudents(json) {
    return {
        type: RECEIVE_STUDENTS,
        students: json
    };
}

export function fetchStudents() {
    return async dispatch => {
        const response = await protectedApi().get('/students');
        dispatch(receiveStudents(response.data));
    }
}

export function registerStudent(student) {
    return async dispatch => {
        await publicApi().post('/students', student);
        dispatch(push('/'));
    };
}

function receiveMentors(json) {
    return {
        type: RECEIVE_MENTORS,
        mentors: json
    }
}

export function fetchMentors() {
    return async dispatch => {
        const response = await protectedApi().get('/mentors');

        dispatch(receiveMentors(response.data));
    }
}

export function registerMentor(mentor) {
    return async dispatch => {
        await publicApi().post('/mentors', mentor);
        dispatch(push('/'));
    };
}

function receiveAreas(json) {
    return {
        type: RECEIVE_AREAS,
        areas: json
    }
}

export function fetchAreas() {
    return async dispatch => {
        const response = await publicApi().get('/areas');
        dispatch(receiveAreas(response.data));
    }
}

function processLoginSuccess(jwt) {
    return {
        type: PROCESS_LOGIN_SUCCESS,
        jwt: jwt
    };
}

function processLoginFailure() {
    return {
        type: PROCESS_LOGIN_FAILURE
    };
}

export function submitUserCredentials(login, password) {
    return async dispatch => {
        const response = await publicApi().post('/auth/login', {
                login: login,
                password: password
            });

        if (response.status == 200) {
            const jwt = response.data.token;
            cookie.save('token', jwt, { path: '/' });
            dispatch(processLoginSuccess(jwt));
            dispatch(push('/feed'));
        }
        else {
            dispatch(processLoginFailure());
        }
    }
}

export function logout() {
    return dispatch => {
        cookie.remove('token');
        dispatch(push('/landing'));
    }
}
