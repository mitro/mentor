import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { RECEIVE_STUDENTS, RECEIVE_MENTORS, RECEIVE_AREAS, PROCESS_LOGIN_SUCCESS, PROCESS_LOGIN_FAILURE } from './actions';

function students(state = [], action) {
    switch (action.type) {
        case RECEIVE_STUDENTS:
            return [...action.students];
        default:
            return state;
    }
}

function mentors(state = [], action) {
    switch (action.type) {
        case RECEIVE_MENTORS:
            return [...action.mentors];
        default:
            return state;
    }
}

function areas(state = [], action) {
    switch (action.type) {
        case RECEIVE_AREAS:
            return [...action.areas];
        default:
            return state;
    }
}

function auth(state = {}, action) {
    switch (action.type) {
        case PROCESS_LOGIN_SUCCESS:
            return {
                loginFailed: false,
                isLoggedIn: true,
                jwt: action.jwt
            };
        case PROCESS_LOGIN_FAILURE:
            return Object.assign({}, state, {
                loginFailed: true
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    students,
    mentors,
    areas,
    auth,
    router: routerReducer
});

export default rootReducer;
