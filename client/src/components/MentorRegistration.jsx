import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { registerMentor, fetchAreas } from '../actions';

class MentorRegistration extends Component{

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchAreas());
    }

    handleSubmit(e) {
        e.preventDefault();

        const mentor = {
            login: this.getInputValue('login'),
            password: this.getInputValue('password'),
            name: this.getInputValue('name'),
            email: this.getInputValue('email'),
            areaIds: this.getSelectedAreas()
        };

        const { dispatch } = this.props;

        dispatch(registerMentor(mentor));
    }

    getInputValue(id) {
        return document.getElementById(id).value;
    }

    getSelectedAreas(){
        const result = [];
        const areasSelect = document.getElementById('areas');
        const options = areasSelect.options;

        for (const option of options) {
            if (option.selected) {
                result.push(option.value);
            }
        }

        return result;
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
                <label>Areas</label>
                <select id='areas' multiple>
                    {this.props.areas.map((area, i) =>
                        <option key={i} value={area._id}>{area.name}</option>
                    )}
                </select>
                <input type='submit' value='Register'/>
            </form>
        )
    }
}

MentorRegistration.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        areas: state.areas
    };
}

export default connect(mapStateToProps)(MentorRegistration);
