import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import cookie from 'react-cookie';

import rootReducer from './reducers';

import MainLayout from './components/MainLayout.jsx';
import LandingLayout from './components/LandingLayout.jsx';
import Landing from './components/Landing.jsx';
import Feed from './features/feed/components/Feed.jsx';
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
            <div>
                <Switch>
                    <MainLayout exact={true} path='/feed' component={Feed}/>
                    <MainLayout exact={true} path='/students' component={Students}/>
                    <MainLayout exact={true} path='/mentors' component={Mentors}/>
                    <Redirect exact from='/' to='/feed'/>
                </Switch>
                <Switch>
                    <LandingLayout exact path='/landing' component={Landing}/>
                    <LandingLayout exact path='/students/registration' component={StudentRegistration}/>
                    <LandingLayout exact path='/mentors/registration' component={MentorRegistration}/>
                    <LandingLayout exact path='/login' component={LoginForm}/>
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

var token = cookie.load('token');
