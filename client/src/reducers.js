import { combineReducers } from 'redux';
import { RECEIVE_STUDENTS, RECEIVE_MENTORS } from './actions';

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

const rootReducer = combineReducers({
    students,
    mentors
});

export default rootReducer;
