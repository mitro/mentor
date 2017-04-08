import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchFeed } from '../actions';

import PostCreation from '../../posts/components/PostCreation.jsx';
import PostList from './PostList.jsx';

class Feed extends Component {
    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(fetchFeed());
    }

    render() {
        const { posts } = this.props;

        return (
            <div>
                <div>Feed</div>
                <PostCreation/>
                <PostList posts={posts}/>
            </div>
        );
    }
}

Feed.propTypes = {
    dispatch: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        posts: state.feed
    };
}

export default connect(mapStateToProps)(Feed);
