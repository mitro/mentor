import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers';

import MainLayout from './components/MainLayout.jsx';
import App from './components/App.jsx';
import Students from './components/Students.jsx';
import Mentors from './components/Mentors.jsx';
import StudentRegistration from './components/StudentRegistration.jsx';
import MentorRegistration from './components/MentorRegistration.jsx';
import LoginForm from './components/LoginForm.jsx';

const history = createHistory();

const historyMiddleware = routerMiddleware(history);

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        historyMiddleware
    )
);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MainLayout>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route exact path='/students' component={Students}/>
                    <Route exact path='/students/registration' component={StudentRegistration}/>
                    <Route exact path='/mentors' component={Mentors}/>
                    <Route exact path='/mentors/registration' component={MentorRegistration}/>
                    <Route exact path='/login' component={LoginForm}/>
                </Switch>
            </MainLayout>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
