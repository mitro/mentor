'use strict';

import { combineReducers } from 'redux';
import { RECEIVE_STUDENTS } from './actions';

function students(state = [], action) {
    switch (action.type) {
        case RECEIVE_STUDENTS:
            return [...action.students];
        default:
            return state;
    }
}

const rootReducer = combineReducers({
   students
});

export default rootReducer;
