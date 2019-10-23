import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Lazyload from './Lazyload';

import Home from 'bundle-loader?lazy&name=[name]!../views/Home/Home';

import Solution from 'bundle-loader?lazy&name=[name]!../views/Solution/Solution'

import Product from 'bundle-loader?lazy&name=[name]!../views/Product/Product'

import Case from 'bundle-loader?lazy&name=[name]!../views/Case/Case'

import Price from 'bundle-loader?lazy&name=[name]!../views/Price/Price'

import About from 'bundle-loader?lazy&name=[name]!../views/About/About'


export default () => (
    <div id="main-body">
        <Switch>
            <Route exact path="/" component={Lazyload(Home)}/>
            <Route path="/solution" component={Lazyload(Solution)}/>
            <Route path="/product" component={Lazyload(Product)}/>
            <Route path="/case" component={Lazyload(Case)}/>
            <Route path="/price" component={Lazyload(Price)}/>
            <Route path="/about" component={Lazyload(About)}/>
            <Route component={Lazyload(Home)}/>
        </Switch>
    </div>
)
