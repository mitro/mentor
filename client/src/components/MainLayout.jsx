import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import cookie from 'react-cookie';

import { logout } from '../actions';

import styles from './MainLayout.css';

class MainLayout extends Component {
    logout() {
        const { dispatch } = this.props;

        dispatch(logout());
    }

    render() {
        const {component: Component, ...rest} = this.props;

        const token = cookie.load('token');

        if (!token){
            return (
                <Redirect to='/landing'/>
            );
        }

        return (
            <section className={styles.page}>
                <div>
                    <Link className={styles.link} to='feed'>Feed</Link>
                    <Link className={styles.link} to='students'>Students</Link>
                    <Link className={styles.link} to='mentors'>Mentors</Link>
                    <a href='#' className={styles.link} onClick={this.logout.bind(this)}>Logout</a>
                </div>
                <div>
                    <Route {...rest} render={matchProps => (
                        <Component {...matchProps} />
                    )} />
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return { };
}

export default connect(mapStateToProps)(MainLayout);
