import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostCreationForm extends Component {
    onSubmit(values) {
        const { handleSubmit, reset } = this.props;

        handleSubmit(values);
        reset();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <Field component='input' type='area' name='text'/><br/>
                <input type='submit' value='Create'/>
            </form>
        );
    }
}

PostCreationForm = reduxForm({
    form: 'postCreation'
})(PostCreationForm);

export default PostCreationForm;
