import React, {Component} from 'react';

import Layout from '../../Layout/Layout';

import Nav from 'components/Nav/Nav';
import getRouter from 'router/router';

export default class App extends Component {
    render() {
        return (
            <Layout>
                <Nav/>
                {getRouter()}
            </Layout>
        )
    }
}