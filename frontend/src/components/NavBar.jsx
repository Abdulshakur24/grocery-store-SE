import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoFastFoodSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import useModal from "../hooks/useModal";
import CartModal from "./CartModal";
import { MdOutlineLogout } from "react-icons/md";
import { logout } from "../redux/slicers/userSlice";
import { clearToken } from "../redux/slicers/tokenSlice";

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  const { user } = useSelector((state) => state.userState);
  const { cart } = useSelector((state) => state.cartState);

  const { toggleModal, setChildren } = useModal();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    });
  }, []);

  const navigator = useNavigate();
  const dispatch = useDispatch();

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
                <div className="flex relative gap-10">
                  <div
                    onClick={() => {
                      toggleModal();
                      setChildren(() => <CartModal navigator={navigator} />);
                    }}
                  >
                    {cart.length >= 1 && (
                      <p className="absolute z-10 flex items-center justify-center text-[14px] w-[20px] h-[20px] rounded-full p-1 bg-white text-black top-[-18px] right-[-20px]">
                        {cart.length >= 10 ? "+9" : cart.length}
                      </p>
                    )}
                    <BsCart4 className="fill-white scale-[2] cursor-pointer" />
                  </div>
                  <MdOutlineLogout
                    className="fill-white scale-[2] cursor-pointer"
                    onClick={() => {
                      dispatch(logout());
                      dispatch(clearToken());
                    }}
                  />
                </div>
              ) : (
                <>
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
              {!user && (
                <div
                  className="ellepsis-bar d-md-none"
                  onClick={() => setSocialToggle(!socialToggle)}
                >
                  <i className="icofont-info-circle"></i>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
