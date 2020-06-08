import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import SignIn from './SignIn';

export default () => {
    return (
        <Router>
            <Route exact path="/" component={App} />
            <Route path="/SignIn" component={SignIn} />
        </Router>
    );
}