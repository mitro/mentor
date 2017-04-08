import protectedApi from '../../utils/protectedApi';

export const RECEIVE_POST = 'RECEIVE_POST'

export function submitPost(post) {
    return dispatch => {
        protectedApi().post('/posts', post)
            .then(response => response.data)
            .then(json => dispatch(receivePost(json)));
    }
}

function receivePost(post) {
    return {
        type: RECEIVE_POST,
        post
    };
}
