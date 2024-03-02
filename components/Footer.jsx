import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Our Mission</h6>
            <p className="text-justify">
              We aim to make grocery shopping convenient, enjoyable, and
              affordable for everyone. Whether you're cooking a family dinner,
              stocking up on essentials, or looking for that special ingredient
              for your favorite recipe, we've got you covered.
            </p>
          </div>
          <div className="col-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links ">
              <li>
                <a href="#">Fruits</a>
              </li>
              <li>
                <a href="#">Vegetables</a>
              </li>
              <li>
                <a href="#">Juices</a>
              </li>
              <li>
                <a href="#">Smoothies</a>
              </li>
              <li>
                <a href="#">Bread</a>
              </li>
              <li>
                <a href="#">Cheese</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Contribute</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="small" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-12">
            <p className="copyright-text">
              Copyright © 2024 All Rights Reserved by 
              <a href="#">
                <span className="logo"> Harvest.</span>
              </a>
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <i className="icofont-facebook"></i>
                </a>
              </li>
              <li>
                <a className="instagram" href="#">
                  <i className="icofont-instagram"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="icofont-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;