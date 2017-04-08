import React, { PropTypes } from 'react';

const PostList = ({ posts }) => {
    return (
        <div>
            {posts.map((post, index) => {
                return <div key={index}>{post.text}</div>;
            })}
        </div>
    );
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PostList;
