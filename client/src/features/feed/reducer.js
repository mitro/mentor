import { RECEIVE_FEED } from './actions';
import { RECEIVE_POST } from '../posts/actions';

const feed = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_FEED:
            return [...action.posts];
        case RECEIVE_POST:
            return [action.post, ...state];
        default:
            return state;
    }
}

export default feed;
