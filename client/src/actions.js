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
    return (dispatch) => {
        protectedApi().get('/students')
            .then(response => response.data)
            .then(json => dispatch(receiveStudents(json)));
    }
}

export function registerStudent(student) {
    return dispatch => {
        publicApi().post('/students', student)
            .then(response => {
                dispatch(push('/'));
            });
    };
}

function receiveMentors(json) {
    return {
        type: RECEIVE_MENTORS,
        mentors: json
    }
}

export function fetchMentors() {
    return (dispatch) => {
        protectedApi().get('/mentors')
            .then(response => response.data)
            .then(json => dispatch(receiveMentors(json)));
    }
}

export function registerMentor(mentor) {
    return dispatch => {
        publicApi().post('/mentors', mentor)
            .then(response => {
                dispatch(push('/'));
            });
    };
}

function receiveAreas(json) {
    return {
        type: RECEIVE_AREAS,
        areas: json
    }
}

export function fetchAreas() {
    return dispatch => {
        publicApi().get('/areas')
            .then(response => response.data)
            .then(json => dispatch(receiveAreas(json)));
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
    return dispatch => {
        publicApi().post('/auth/login', {
                login: login,
                password: password
            })
            .then(res => {
                console.log(res);
                if (res.status == 200) {
                    return res.data;
                }

                var error = new Error(res.statusText);
                error.response = res;
                throw error;
            })
            .then(json => {
                const jwt = json.token;
                cookie.save('token', jwt, { path: '/' });
                dispatch(processLoginSuccess(jwt));
                dispatch(push('/feed'));
            })
            .catch(err => {
                dispatch(processLoginFailure());
            });
    }
}

export function logout() {
    return dispatch => {
        cookie.remove('token');
        dispatch(push('/landing'));
    }
}
