import React, { useState } from 'react';
import './Navbar.css';
import {
  FaChevronDown,
  FaSearch,
} from 'react-icons/fa';
import {
  IoBulbOutline,
  IoCameraOutline,
  IoCartOutline,
  IoClose,
} from 'react-icons/io5';
import {
  CiCamera,
  CiVideoOn,
} from 'react-icons/ci';
import { RiCameraLensFill } from 'react-icons/ri';
import { FiSearch } from "react-icons/fi";
import { TbMenu2 } from "react-icons/tb";



import { MdOutlineFlipCameraAndroid } from 'react-icons/md';
import { TbTelescope } from 'react-icons/tb';

import logo from '../assets/IMG_1857.PNG';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMobileSearch = () => setMobileSearchOpen(!mobileSearchOpen);

  return (
    <header className="navbar">
      <nav className="navbar-container">
       
        <img src={logo} alt="Logo" className="logo" />

        {/* Desktop Search Bar */}
        <div className="search-bar desktop-only">
          <input type="text" placeholder="Search equipment..." />
          <button className="search-btn"><FiSearch /></button>
        </div>

        {/* Desktop Nav Links */}
        <ul className={`nav-links desktop-only`}>
          <li><a href="/">Home</a></li>

          <li className="dropdown">
            <span>Services <FaChevronDown className="dropdown-icon" /></span>
            <ul className="dropdown-menu">
              <li><MdOutlineFlipCameraAndroid className="list-icon" /><a href="/services/renting">Renting</a></li>
              <li><FaChevronDown className="list-icon" /><a href="/services/lighting">Lighting</a></li>
              <li><CiVideoOn className="list-icon" /><a href="/services/video">Video Coverage</a></li>
              <li><IoCameraOutline className="list-icon" /><a href="/services/photo">Photography</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <span>Equipments <FaChevronDown className="dropdown-icon" /></span>
            <ul className="dropdown-menu">
              <li><CiCamera className="list-icon" /><a href="/equipments/camera">Camera</a></li>
              <li><IoBulbOutline className="list-icon" /><a href="/equipments/light">Studio Light</a></li>
              <li><TbTelescope className="list-icon" /><a href="/equipments/tripod">Tripod Stand</a></li>
              <li><RiCameraLensFill className="list-icon" /><a href="/equipments/lens">Lens</a></li>
            </ul>
          </li>

          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions desktop-only">
          <button className="btn login">Login</button>
          <button className="btn">Sign Up</button>
          <button className="icon-btn hidden"><IoCartOutline /></button>
          <button className="search-btn hidden"><FiSearch /></button>

        </div>

        {/* Mobile Icons */}
        <div className="mobile-icons mobile-only">
          <button className="icon-btn" onClick={toggleMenu}>
            {menuOpen ? <IoClose /> : <TbMenu2 />}
          </button>

        </div>
      </nav>

      {/* Mobile Search Bar */}
      {mobileSearchOpen && (
        <div className="mobile-search">
          <input type="text" placeholder="Search equipment..." />
          <button className="search-btn"><FaSearch /></button>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu-overlay">
        <ul className="mobile-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Equipments</a></li>
        <li><a href="/">Contacts</a></li>

        </ul>

          <div className="nav-actions">
            <button className="btn login">Login</button>
            <button className="btn">Sign Up</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
