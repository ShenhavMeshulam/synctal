import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import SignIn from './SignIn';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

export default () => {
    return (
        <AuthProvider>
            <Router>
                <PrivateRoute exact path="/" component={App} />
                <Route path="/SignIn" component={SignIn} />
            </Router>
        </AuthProvider>
    );
}