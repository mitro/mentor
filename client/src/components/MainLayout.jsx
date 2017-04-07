import React, { Component } from 'react';

import styles from './MainLayout.css';

export default class MainLayout extends Component {
    render() {
        return (
            <section className={styles.page}>
                <div>Some header</div>
                {this.props.children}
            </section>
        );
    }
}