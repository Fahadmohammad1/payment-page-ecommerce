import React from "react";
import "./Navbar.css";
import logo from "../../Assets/images/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <h2 className="nav-logo">
            <img src={logo} alt="" />
            <span className="nav-title">E</span> -Shop
          </h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
