'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import configureStore from './configureStore';
import App from './components/App.jsx';
import Students from './components/Students.jsx';

const store = configureStore();

const history = createHistory();

render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path='/' component={App}/>
                <Route path='/students' component={Students}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
