import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <span className="my-logo">LOGO</span>
        <ul>
          <Link className="link" to="/">
            <li>Home</li>
          </Link>
          <Link className="link" to="products">
            <li>Products</li>
          </Link>
          <Link className="link" to="about">
            <li>About</li>
          </Link>
          <Link className="link" to="contact">
            <li>Contact</li>
          </Link>
        </ul>
        <button>Sign-In</button>
      </div>
    </>
  );
};

export default Navbar;
