import React from "react";
import { Link } from "react-router-dom";
import CartCollapse from "../cart/cartCollapse";
import wordings from "../../wordings";
import './styles.scss';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="navbar__brand">
      <img src="/images/brand.png" alt={wordings.navbar.brandName} className="navbar__brand-img" />
    </Link>
    <div className="navbar__cart">
      <CartCollapse />
    </div>
  </nav>
);

export default Navbar;
