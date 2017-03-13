import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import configureStore from './configureStore';
import App from './components/App.jsx';
import Students from './components/Students.jsx';
import Mentors from './components/Mentors.jsx';
import StudentRegistration from './components/StudentRegistration.jsx';

const store = configureStore();

const history = createHistory();

render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path='/' component={App}/>
                <Route exact path='/students' component={Students}/>
                <Route exact path='/students/registration' component={StudentRegistration}/>
                <Route exact path='/mentors' component={Mentors}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
