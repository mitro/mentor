import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import PostCreationForm from './PostCreationForm.jsx';
import { submitPost } from './actions';

class PostCreation extends Component {
    handleSubmit(values) {
        const post = values;
        const { dispatch } = this.props;
        dispatch(submitPost(post));
    }

    render() {
        return (
            <PostCreationForm onSubmit={this.handleSubmit.bind(this)}/>
        );
    }
}


PostCreation.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(PostCreation);
