import fetch from 'isomorphic-fetch';

export const RECEIVE_STUDENTS = "RECEIVE_STUDENTS";
export const RECEIVE_MENTORS = "RECEIVE_MENTORS";

function receiveStudents(json) {
    return {
        type: RECEIVE_STUDENTS,
        students: json
    };
}

export function fetchStudents() {
    return dispatch => {
        return fetch('http://localhost:3000/api/student')
            .then(response => response.json())
            .then(json => dispatch(receiveStudents(json)));
    }
}

export function registerStudent(student) {
    console.log(student);
    return dispatch => {
        return fetch('http://localhost:3000/api/student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
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
    return dispatch => {
        return fetch('http://localhost:3000/api/mentor')
            .then(response => response.json())
            .then(json => dispatch(receiveMentors(json)));
    }
}
