import React, { useState } from "react";

function Navbar() {
  const [showInput, setShowInput] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <i className="bx bx-menu"></i>
        <div className="logo">
          <a href="index.html">Harvest Haven</a>
        </div>
        <div className="nav-links">
          <div className="sidebar-logo">
            <span className="logo-name">Harvest Haven</span>
            <i className="bx bx-x"></i>
          </div>
          <ul className="links">
            <li>
              <a href="index.html">HOME</a>
            </li>
            <li>
              <a href="#">SHOP</a>
              <i className="bx bxs-chevron-down htmlcss-arrow arrow  "></i>
              <ul className="htmlCss-sub-menu sub-menu">
                <li>
                  <a href="cake.html">Fruits</a>
                </li>
                <li>
                  <a href="cookie.html">Vegetables</a>
                </li>
                <li>
                  <a href="cookie.html">Juice</a>
                </li>
                <li>
                  <a href="cookie.html">Smoothies</a>
                </li>
                <li>
                  <a href="cookie.html">Bread</a>
                </li>
                <li>
                  <a href="cookie.html">Cheese</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="events.html">BLOG</a>
            </li>
            <li>
              <a href="about.html">ABOUT US</a>
            </li>
            <li>
              <a href="contact.html">CONTACT US</a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-basket-shopping"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="search-box">
          <i className="bx bx-search"></i>
          <div className="input-box">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
