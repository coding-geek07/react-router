import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const linkActive = ({ isActive }) => {
    return isActive ? "linkActive" : undefined;
  };
  return (
    <>
      <div className="navbar">
        <span className="my-logo">LOGO</span>
        <ul>
          <li className="link">
            <NavLink className={linkActive} end to="/">
              Home
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="products" className={linkActive}>
              Products
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="about" className={linkActive}>
              About
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="contact" className={linkActive}>
              Contact
            </NavLink>
          </li>
          {/* <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li> */}
        </ul>
        <button>Sign-In</button>
      </div>
    </>
  );
};

export default Navbar;
