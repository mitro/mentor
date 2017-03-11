'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Link to='students'>Students</Link>
        );
    }
}

export default App;
