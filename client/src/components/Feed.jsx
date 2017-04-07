import React, { Component } from 'react';
import PostCreation from '../features/posts/PostCreation.jsx';

export default class Feed extends Component {
    render() {
        return (
            <div>
                <div>Feed</div>
                <PostCreation/>
            </div>
        );
    }
}