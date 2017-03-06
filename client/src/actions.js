'use strict';

import fetch from 'isomorphic-fetch';

export const RECEIVE_STUDENTS = "RECEIVE_STUDENTS";

function receiveStudents(json) {
    return {
        type: RECEIVE_STUDENTS,
        students: json
    };
}

export function fetchStudents(){
    return dispatch => {
        return fetch('http://localhost:3000/api/student')
            .then(response => response.json())
            .then(json => dispatch(receiveStudents(json)));
    }
}
