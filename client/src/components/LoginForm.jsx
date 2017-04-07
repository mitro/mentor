import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { submitUserCredentials } from '../actions';

class LoginForm extends Component {
    handleSubmit(e) {
        e.preventDefault();

        const login = this.getInputValue('login');
        const password = this.getInputValue('password');

        const { dispatch } = this.props;
        dispatch(submitUserCredentials(login, password));
    }

    getInputValue(id) {
        return document.getElementById(id).value;
    }

    render() {

        const { isLoggedIn, loginFailed, jwt } = this.props.auth;

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Login</label>
                <input type='text' name='login' id='login'/><br/>
                <label>Password</label>
                <input type='password' name='password' id='password'/><br/>
                <input type='submit' value='Login'/>
            </form>
        );
    }
}

LoginForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(LoginForm);
