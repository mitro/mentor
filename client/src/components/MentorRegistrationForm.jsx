import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class MentorRegistrationForm extends Component {
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
                <label htmlFor='areaIds'>Areas</label>
                <Field component='select' name='areaIds' multiple type='select-multiple'>
                    {this.props.areas.map((area, i) =>
                        <option key={i} value={area._id}>{area.name}</option>
                    )}
                </Field>
                <input type='submit' value='Register'/>
            </form>
        );
    }
}

MentorRegistrationForm = reduxForm({
    form: 'mentorRegistration'
})(MentorRegistrationForm);

export default MentorRegistrationForm;
