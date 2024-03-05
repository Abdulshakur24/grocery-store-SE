import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoFastFoodSharp } from "react-icons/io5";

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  const { user } = useSelector((state) => state.userState);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    });
  }, []);

  return (
    /* Header top */
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login" className="lab-btn me-3">
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Header Bottom*/}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* Logo*/}
            <div className="logo-search-acte">
              <div className="">
                <Link to={"/"} className="flex items-center gap-3">
                  <IoFastFoodSharp className="fill-white scale-[3]" />
                  <h4 className="text-white italic">Grocery Store</h4>
                </Link>
              </div>
            </div>
            {/* Menu */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  {[
                    { id: 1, path: "/", name: "Home" },
                    { id: 2, path: "/shop", name: "Shop" },
                    { id: 3, path: "/blog", name: "Blog" },
                    { id: 4, path: "/about", name: "About" },
                    { id: 5, path: "/contact", name: "Contact Us" },
                  ].map(({ id, path, name }) => (
                    <li key={id}>
                      <Link to={path} className="text-white">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {user ? (
                <div>{user.username}</div>
              ) : (
                <>
                  <Link to="/signup" className="lab-btn me-3 d-none d-md-block">
                    Create Account
                  </Link>
                  <Link to="/login" className="lab-btn me-3 d-none d-md-block">
                    Login
                  </Link>
                </>
              )}

              {/* Menu toggle */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              {/* Social toggle */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
