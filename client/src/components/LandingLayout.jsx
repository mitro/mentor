import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import styles from './LandingLayout.css';

const LandingLayout = ({component: Component, ...rest}) => {
    return (
        <section className={styles.page}>
            Welcome!
            <div>
                <Route {...rest} render={matchProps => (
                    <Component {...matchProps} />
                )} />
            </div>
        </section>
    );
}

export default LandingLayout;
