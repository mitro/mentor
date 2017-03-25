import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { registerMentor, fetchAreas } from '../actions';
import MentorRegistrationForm from './MentorRegistrationForm.jsx';

class MentorRegistration extends Component{
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchAreas());
    }

    handleSubmit(values) {
        const mentor = values;
        const { dispatch } = this.props;

        dispatch(registerMentor(mentor));
    }

    render() {
        return (
            <MentorRegistrationForm onSubmit={this.handleSubmit.bind(this)} areas={this.props.areas}/>
        );
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
