import React, { useCallback } from "react";
import { withRouter, Redirect } from 'react-router';
import { auth } from "firebase";
import { AuthContext } from "./Auth";

const Login = ({ history }) => {
    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        try {
            await auth().signInWithEmailAndPassword(email.value, password.value);
            history.push('/');
        } catch (error) {
            alert(error);
        }
    }, [history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                    email
                    <input name='email' type='email' placeholder='Email' />
                </label>
                <label>
                    password
                    <input name='password' type='password' placeholder='Password' />
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default withRouter(Login);