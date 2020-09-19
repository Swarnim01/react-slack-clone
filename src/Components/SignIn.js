import React from 'react';
import { SignInwithGoogle } from '../firebase';

const SignIn = () => {
  return (
    <div className="signin-form">
      <h1>Sign In/ Sign Up</h1>
      <button className="btn basic-btn" onClick={SignInwithGoogle}>
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png"
          alt="googleimage"
        />
        Sign in with Google
      </button>
      <div style={{ textAlign: 'center', fontSize: 13 }}>OR</div>
      <button className="btn basic-btn" onClick={SignInwithGoogle}>
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png"
          alt="googleimage"
        />
        Sign up with Google
      </button>
    </div>
  );
};
export default SignIn;
