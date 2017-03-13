'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { fetchStudents } from '../actions';

class Students extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchStudents());
    }

    render() {
        const { students } = this.props;
        return (
            <ul>
                {students.map((student, i) =>
                    <li key='i'>{student.name} | {student.email} | {student.location}</li>
                )}
            </ul>
        );
    }
};

Students.propTypes = {
    students: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        students: state.students
    };
}

export default connect(mapStateToProps)(Students);
