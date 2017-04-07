import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostCreationForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
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
