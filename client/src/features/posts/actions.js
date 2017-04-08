import fetch from 'isomorphic-fetch';
import cookie from 'react-cookie';

export const RECEIVE_POST = 'RECEIVE_POST'

export function submitPost(post) {
    return dispatch => {
        fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            headers: {
                'Authorization': `JWT ${cookie.load('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(response => response.json())
            .then(json => dispatch(receivePost(json)));
    }
}

function receivePost(post) {
    return {
        type: RECEIVE_POST,
        post
    };
}
