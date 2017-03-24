import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';

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
    return (dispatch, getState) => {
        const { auth } = getState();

        fetch('http://localhost:3000/api/student', {
            headers: {
                'Authorization': `Bearer ${auth.jwt}`
            }})
            .then(response => response.json())
            .then(json => dispatch(receiveStudents(json)));
    }
}

export function registerStudent(student) {
    return dispatch => {
        fetch('http://localhost:3000/api/student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            })
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
    return (dispatch, getState) => {
        const { auth } = getState();

        fetch('http://localhost:3000/api/mentor', {
            headers: {
                'Authorization': `Bearer ${auth.jwt}`
            }})
            .then(response => response.json())
            .then(json => dispatch(receiveMentors(json)));
    }
}

export function registerMentor(mentor) {
    return dispatch => {
        fetch('http://localhost:3000/api/mentor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mentor)
        })
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
        fetch('http://localhost:3000/api/area')
            .then(response => response.json())
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
        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                password: password
            })
        })
            .then(res => {
                if (res.status == 200) {
                    return res.json();
                }

                var error = new Error(res.statusText);
                error.response = res;
                throw error;
            })
            .then(json => {
                const jwt = json.token;
                console.log(json);
                dispatch(processLoginSuccess(jwt));
                dispatch(push('/'));
            })
            .catch(err => {
                dispatch(processLoginFailure());
            });
    }
}