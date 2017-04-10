import protectedApi from '../../utils/protectedApi';

export const RECEIVE_FEED = 'RECEIVE_FEED';

export function fetchFeed() {
    return async dispatch => {
        const response = await protectedApi().get('/feed');
        dispatch(receiveFeed(response.data));
    }
}

function receiveFeed(posts) {
    return {
        type: RECEIVE_FEED,
        posts
    };
}
