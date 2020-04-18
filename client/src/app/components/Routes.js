import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import Login from './Login';

export default () => {
    return (
        <Router>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
        </Router>
    );
}