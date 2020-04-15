import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import Login from './Login';

export default () => {
    return (
        <Router>
            <div>
                <Route path="/" component={App} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    );
}