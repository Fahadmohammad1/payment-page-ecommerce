import React from "react";
import "./ShippingInfo.css";
import { Link } from "react-router-dom";
const ShippingInfo = () => {
  return (
    <section className="shipping-info">
      <div className="login-signin-btn">
        <Link to="/login">
          <button className="login-btn">LOG IN</button>
        </Link>
        <Link to="/signup">
          <button className="signin-btn">SIGN IN</button>
        </Link>
      </div>
      <div>
        <h4>Shipping Information</h4>
        <form action="">
          <div>
            <input
              className="left-input"
              type="email"
              name=""
              id=""
              placeholder="Email"
            />
            <input
              className="right-input"
              type="text"
              name=""
              id=""
              placeholder="Address"
            />
            <input
              className="left-input"
              type="text"
              name=""
              id=""
              placeholder="First name"
            />
            <input
              className="right-input"
              type="text"
              name=""
              id=""
              placeholder="City"
            />
            <input
              className="left-input"
              type="text"
              name=""
              id=""
              placeholder="Last name"
            />
            <input
              className="right-input"
              type="text"
              name=""
              id=""
              placeholder="Postal Code / ZIP"
            />
            <input
              className="left-input"
              type="text"
              name=""
              id=""
              placeholder="Phone number"
            />
            <select className="country-select" name="" id="">
              <option value="0">Poland</option>
              <option value="1">USA</option>
              <option value="2">India</option>
              <option value="3">Bangladesh</option>
            </select>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ShippingInfo;
