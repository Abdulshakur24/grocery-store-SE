import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    window.addEventListener("scroll", () => {
        if(window.scrollY > 200){
            setHeaderFixed(true);
        } else{
            setHeaderFixed(false);
        }
    })
  return (
    /* Header top */
    <header className={`header-section style-4 ${headerFixed ? 'header-fixed fadeInUp' : ''}`}>
        <div className={`header-top d-md-none ${socialToggle ? 'open' : ''}`}>
            <div className='container'>
                <div className='header-top-area'>
                    <Link to='/signup' className='lab-btn me-3'><span>Create Account</span></Link>
                    <Link to ='/login'>Login</Link>
                </div>
            </div>
        </div>
        {/* Header Bottom*/}
        <div className='header-bottom'>
            <div className='container'>
                <div className='header-wrapper'>
                    {/* Logo*/}
                    <div className='logo-search-acte'>
                        <div className='logo'>
                            <Link to={'/'}>Harvest Haven</Link>
                        </div>
                    </div>
                    {/* Menu */}
                    <div className='menu-area'>
                        <div className='menu'>
                            <ul className={`lab-ul ${menuToggle ? 'active' : ''}`}>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/shop'>Shop</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/about'>About Us</Link></li>
                                <li><Link to='/contact'>Contact Us</Link></li>
                            </ul>
                        </div>
                        {/* */}
                        <Link to='/signup' className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                        <Link to='/login' className='lab-btn me-3 d-none d-md-block'>Login</Link>
                        {/* Menu toggle */}
                        <div onClick={() => setMenuToggle(!menuToggle)}  className={`header-bar d-lg-none ${menuToggle ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {/* Social toggle */}
                        <div className='ellepsis-bar d-md-none' onClick={() => setSocialToggle(!socialToggle)}>
                            <i className="icofont-info-circle"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavBar