import React from "react";
import "./Navbar.css";
import logo from "../../Assets/images/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <div>
          <h2 className="nav-logo">
            <img src={logo} alt="" />
            <span className="nav-title">E-</span>Shop
          </h2>
        </div>
      </Link>
      <div>
        <a href=".">Men</a>
        <a href=".">Women</a>
        <a href=".">Kids</a>
      </div>
      <div className="nav-icons">
        <FaSearch />
        <FaShoppingCart />
        <FaUserAlt />
      </div>
    </nav>
  );
};

export default Navbar;
