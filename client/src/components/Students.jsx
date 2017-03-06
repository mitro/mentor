'use strict';

import React, { PropTypes, Component } from 'react';

export default class Students extends Component {
    render() {
        return (
            <ul>
                {this.props.students.map((student, i) =>
                    <li key="i">{student.name} | {student.email} | {student.location}</li>
                )}
            </ul>
        );
    }
};

Students.propTypes = {
    students: PropTypes.array.isRequired
}
