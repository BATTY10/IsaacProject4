import React from "react";
import bbcLogo from "../../assets/image/bbclogo.png";
import { NavLink, Link } from "react-router-dom";
import "../../styles/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={bbcLogo} alt="imageLogo" />
      </Link>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Product</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/cart">
          Cart <sup>0</sup>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
