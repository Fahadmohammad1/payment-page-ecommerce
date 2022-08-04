import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <section className="signup-section">
        <div>
          <h3 className="signup-title">Please Login</h3>
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
          <p className="login-text">
            Already have an account?{" "}
            <Link to="/login" className="signup-link">
              Login
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
