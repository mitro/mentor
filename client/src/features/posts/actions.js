import protectedApi from '../../utils/protectedApi';

export const RECEIVE_POST = 'RECEIVE_POST'

export function submitPost(post) {
    return async dispatch => {
        const response = await protectedApi().post('/posts', post);
        dispatch(receivePost(response.data));
    }
}

function receivePost(post) {
    return {
        type: RECEIVE_POST,
        post
    };
}
