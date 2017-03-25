import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { registerStudent } from '../actions';
import StudentRegistrationForm from './StudentRegistrationForm.jsx';

class StudentRegistration extends Component {
    handleSubmit(values) {
        const student = values;
        const { dispatch } = this.props;

        dispatch(registerStudent(student));
    }

    render() {
        return (
            <StudentRegistrationForm onSubmit={this.handleSubmit.bind(this)}/>
        );
    }
}

StudentRegistration.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(StudentRegistration);
