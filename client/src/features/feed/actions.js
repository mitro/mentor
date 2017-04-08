import protectedApi from '../../utils/protectedApi';

export const RECEIVE_FEED = 'RECEIVE_FEED';

export function fetchFeed() {
    return dispatch => {
        protectedApi().get('/feed')
            .then(response => response.data)
            .then(posts => dispatch(receiveFeed(posts)));
    }
}

function receiveFeed(posts) {
    return {
        type: RECEIVE_FEED,
        posts
    };
}
