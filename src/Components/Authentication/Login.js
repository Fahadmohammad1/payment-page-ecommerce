import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase.init";
const Login = () => {
  const user = getAuth(auth);
  const provider = new GoogleAuthProvider();

  return (
    <section className="login-section">
      <div>
        <h3 className="login-title">Please Login</h3>
        <button className="google-btn">
          <img
            className="google-logo"
            src="https://pngimg.com/uploads/google/google_PNG19625.png"
            alt=""
          />
        </button>
        <span className="divider">OR</span>
        <form action="">
          <input type="email" name="" id="" placeholder="Email" />
          <br />
          <input type="text" name="" id="" placeholder="Password" />
        </form>
        <p className="signup-text">
          New User?{" "}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
