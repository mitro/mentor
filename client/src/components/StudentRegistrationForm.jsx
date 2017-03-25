import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class StudentRegistrationForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor='login'>Login</label>
                <Field component='input' type='text' name='login'/><br />
                <label htmlFor='password'>Password</label>
                <Field component='input' type='password' name='password'/><br />
                <label htmlFor='name'>Name</label>
                <Field component='input' type='text' name='name'/><br />
                <label htmlFor='email'>Email</label>
                <Field component='input' type='email' name='email'/><br />
                <label htmlFor='location'>Location</label>
                <Field component='input' type='text' name='location'/><br />
                <input type='submit' value='Register'/>
            </form>
        );
    }
}

StudentRegistrationForm = reduxForm({
    form: 'studentRegistration'
})(StudentRegistrationForm);

export default StudentRegistrationForm;
