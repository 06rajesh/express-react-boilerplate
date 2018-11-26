/**
 * Created by Rajesh on 11/26/18.
 */

import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import '../sass/app.scss';
import store from './store';
import Landing from './pages/landing';
import About from './pages/about';
import NotFound from './pages/notfound';

let Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/landing" component={Landing} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

let HelloWorld = () => (
    <h2>
        Welcome To Express React Boilerplate
    </h2>
);

render(
    <Root store={store}/>,
    document.getElementById('app')
);
