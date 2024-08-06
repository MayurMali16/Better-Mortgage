
import React from 'react';
import './signin.css';

function SignIn() {
    return (
        <div className="signin">
            <div className="container">
                <h1>Better</h1>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign in</button>
                    <div className="or">or</div>
                    <button className="google-signin">
                        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" />
                        Continue with Google
                    </button>
                    <p className="signup-link">
                        Don't have a Better account? <a href="/home">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
