'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Students from './Students.jsx';
import { fetchStudents } from '../actions';

 class App extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchStudents());
    }

    render() {
        const { students } = this.props;
        return (
            <Students students={students}/>
        );
    }
}

App.propTypes = {
    students: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        students: state.students
    }
}

export default connect(mapStateToProps)(App);
