import React, { useCallback } from "react";
import { withRouter } from 'react-router';
import { auth } from "firebase";

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        try {
            await auth().createUserWithEmailAndPassword(email.value, password.value);

            history.push('/');
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    email
                    <input name='email' type='email' placeholder='Email' />
                </label>
                <label>
                    password
                    <input name='password' type='password' placeholder='Password' />
                </label>
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}

export default withRouter(SignUp);