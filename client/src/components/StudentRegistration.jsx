import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { registerStudent } from '../actions';

class StudentRegistration extends Component {
    handleSubmit(e) {
        e.preventDefault();

        const student = {
            login: this.getInputValue('login'),
            password: this.getInputValue('password'),
            name: this.getInputValue('name'),
            email: this.getInputValue('email'),
            location: this.getInputValue('location'),
        };

        const { dispatch } = this.props;
        dispatch(registerStudent(student));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Login</label>
                <input type='text' id='login' name='login'/><br />
                <label>Password</label>
                <input type='password' id='password' name='password'/><br />
                <label>Name</label>
                <input type='text' id='name' name='name'/><br />
                <label>Email</label>
                <input type='email' id='email' name='email'/><br />
                <label>Location</label>
                <input type='text' id='location' name='location'/><br />
                <input type='submit' value='Register'/>
            </form>
        );
    }

    getInputValue(id) {
        return document.getElementById(id).value;
    }
}

StudentRegistration.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(StudentRegistration);