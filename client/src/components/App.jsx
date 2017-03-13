'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <Link to='students'>Students</Link><br />
                <Link to='mentors'>Mentors</Link>
            </div>
        );
    }
}

export default App;
