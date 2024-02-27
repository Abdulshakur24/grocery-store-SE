import React from "react";
import freeDelivery from "../assets/images/free-delivery.png";
import saveIcon from "../assets/images/save.png";
import promotion from "../assets/images/promotions.png";
import orderOnline from "../assets/images/order online.png";
import support from "../assets/images/support.png";
import redOnion from "../assets/images/red-onion.jpg";
import mangoes from "../assets/images/mangoes.jpg";
import cucumber from "../assets/images/cucumber.jpg";
import kales from "../assets/images/kales.jpg";
import garlic from "../assets/images/garlic.jpg";
import tomatoes from "../assets/images/tomatoes.jpg";
import banana from "../assets/images/banana.jpg";
import strawberries from "../assets/images/strawberries.jpg";
import flatlayVegs from "../assets/images/flat-lay-vegetables-copy-space.jpg";
import smoothieBanner from "../assets/images/juice&smoothiebanner.png";
import breadPoster from "../assets/images/breadposter.png";
import cheesePoster from "../assets/images/cheeseposter.png";

function Home() {
  return (
    <>
      <section id="hero-sec" style={{ backgroundImage: `url(${flatlayVegs})` }}>
        <h4></h4>
        <h2>Great value for your money</h2>
        <h1>On all produce</h1>
        <p>Up to 40% off!</p>
        <button>Shop Now</button>
      </section>
      <section id="features" className="sectionp">
        <div className="fe-box">
          <img src={freeDelivery} />
          <h6>Free Delivery</h6>
        </div>
        <div className="fe-box">
          <img src={saveIcon} />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src={promotion} />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src={orderOnline} />
          <h6>Order Online</h6>
        </div>
        <div className="fe-box">
          <img src={support} />
          <h6>Support</h6>
        </div>
      </section>
      <section id="product1" className="sectionp">
        <h2>Featured Produce</h2>
        <h4>Produce In Season</h4>
        <div className="pro-container">
          <div className="pro">
            <img src={redOnion} />
            <div className="desc">
              <span>Red Onion</span>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fa-solid fa-star-half"></i>
              </div>
              <h5>Ksh.259</h5>
            </div>
            <a href="">
              <i className="fa-solid fa-cart-plus cart cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src={mangoes} />
            <div className="desc">
              <span>Mangoes</span>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h5>Ksh.259</h5>
            </div>
            <a href="">
              <i className="fa-solid fa-cart-plus cart cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src={cucumber} />
            <div className="desc">
              <span>Cucumbers</span>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h5>Ksh.259</h5>
            </div>
            <a href="">
              <i className="fa-solid fa-cart-plus cart cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src={kales} />
            <div className="desc">
              <span>Kales</span>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h5>Ksh.259</h5>
            </div>
            <a href="">
              <i className="fa-solid fa-cart-plus cart cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src={garlic} />
            <div className="desc">
              <span>Garlic</span>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h5>Ksh.259</h5>
            </div>
            <a href="">
              <i className="fa-solid fa-cart-plus cart cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src={tomatoes} />
            <div className="desc">
              <span>Tomatoes</span>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h5>Ksh.259</h5>
            </div>
            <a href="">
              <i className="fa-solid fa-cart-plus cart cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src={banana} />
            <div className="desc">
              <span>Bananas</span>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h5>Ksh.259</h5>
            </div>
            <a href="">
              <i className="fa-solid fa-cart-plus cart cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src={strawberries} />
            <div className="desc">
              <span>Strawberries</span>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h5>Ksh.259</h5>
            </div>
            <a href="">
              <i className="fa-solid fa-cart-plus cart cart"></i>
            </a>
          </div>
        </div>
      </section>
      <section
        id="banner"
        className="sectionm1"
        style={{ backgroundImage: `url(${smoothieBanner})` }}
      >
        <h4>Juices And Smoothies</h4>
        <h2>
          Freshly <span>Squeezed</span> And <span>Blended</span>
        </h2>
        <button className="normal">Explore More</button>
      </section>
      <section id="banner2" className="sectionp">
        <div
          className="banner-box"
          style={{ backgroundImage: `url(${breadPoster})` }}
        >
          <h4>Bready Thursdays</h4>
          <h2>Buy 1 Get 1 Free</h2>
          <span>Indulge in some of the best bread in town!</span>
          <button className="orange">Learn More</button>
        </div>
        <div
          className="banner-box banner-box2"
          style={{ backgroundImage: `url(${cheesePoster})` }}
        >
          <button className="orange">Learn More</button>
        </div>
      </section>
      <section id="newsletter" className="sectionp">
        <div className="ntext">
          <h4>Sign Up For Our Newsletters</h4>
          <h5>
            Sign up for our weekly updates and be the first to know about our
            specials and promotions.
          </h5>
        </div>
        <div className="form">
          <input type="text" placeholder="Your Email Address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </>
  );
}

export default Home;
