import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { fetchMentors } from '../actions';

class Mentors extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchMentors());
    }

    render() {
        const { mentors } = this.props;
        return (
            <ul>
                {mentors.map((mentor, i) =>
                    <li key={i}>{mentor.name} | {mentor.email} | {mentor.areas.join(', ')}</li>
                )}
            </ul>
        );
    }
}

Mentors.propTypes = {
    mentors: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        mentors: state.mentors
    };
}

export default connect(mapStateToProps)(Mentors);
