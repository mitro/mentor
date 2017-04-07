import React from 'react';
import { Link } from 'react-router-dom';

export default class Lending extends React.Component {
    render() {
        return (
            <div>
                <Link to='students/registration'>Student registration</Link><br />
                <Link to='mentors/registration'>Mentor registration</Link><br />
                <Link to='login'>Login</Link><br />
            </div>
        );
    }
}
