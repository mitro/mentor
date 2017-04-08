import fetch from 'isomorphic-fetch';
import cookie from 'react-cookie';

export const RECEIVE_FEED = 'RECEIVE_FEED';

export function fetchFeed() {
    return dispatch => {
        fetch('http://localhost:3000/api/feed', {
            headers: {
                'Authorization': `JWT ${cookie.load('token')}`
            }
        })
            .then(response => response.json())
            .then(posts => dispatch(receiveFeed(posts)));
    }
}

function receiveFeed(posts) {
    return {
        type: RECEIVE_FEED,
        posts
    };
}
