import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import {HashRouter as Router} from 'react-router-dom';
// import App from 'components/App/App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap';
import Layout from './Layout/Layout';

ReactDom.render(
    <Provider store={store}>
        <Router>
            <Layout/>
        </Router>
    </Provider>,
    document.getElementById('app')
);

