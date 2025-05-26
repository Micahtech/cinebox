import React from 'react';
import './MobileNavbar.css';
import { FaHome, FaCamera, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function MobileNavbar() {
  return (
    <div className="mobile-navbar">
      <Link to="/" className="mobile-nav-item">
        <FaHome />
        <span>Home</span>
      </Link>
      <Link to="/equipments" className="mobile-nav-item">
        <FaCamera />
        <span>Equipments</span>
      </Link>
      <Link to="/cart" className="mobile-nav-item">
        <FaShoppingCart />
        <span>Cart</span>
      </Link>
      <Link to="/account" className="mobile-nav-item">
        <FaUser />
        <span>Account</span>
      </Link>
    </div>
  );
}

export default MobileNavbar;
