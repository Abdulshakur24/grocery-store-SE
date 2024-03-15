import React from "react"

import { motion } from "framer-motion"
import { HoverImageLinks } from "./HoverImageLinks";
import ClipPathLinks from "./ClipPathLinks";

const subTitle = "About Our Brand"; const title = "Unveiling the Story of How We Came To Be "; const desc = "There was a community of food lovers who craved a convenient and reliable grocery shopping experience. Inspired by this need, a group of passionate entrepreneurs came together with a vision to create something special – a modern, online grocery store that would revolutionize the way people shopped for essentials. They envisioned a platform where freshness, quality, and convenience would be paramount, catering to the diverse tastes and preferences of their community. With dedication and determination, they embarked on their journey, sourcing the finest produce from local farmers and partnering with trusted suppliers to ensure the highest standards of quality. They carefully curated a wide selection of products, from organic fruits and vegetables to artisanal cheeses and gourmet delights, catering to every culinary need and desire. They poured their hearts into building a user-friendly website, designed to make shopping a breeze for busy families, professionals, and food enthusiasts alike. With intuitive navigation, seamless checkout, and flexible delivery options, they aimed to bring the joy of grocery shopping right to their customers' doorsteps.";

const year = "10+"; const experience = "Years Of Experience";

const About = () => {
  return (
    <div>
      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  <img src="/src/assets/images/about/about-fruit.jpg" alt="" />
                </div>
                <div className="abs-thumb">
                  <img src="/src/assets/images/about/about-veggies.jpg" alt="" />
                </div>
                <div className="about-left-content">
                  <h3>{year}</h3>
                  <p>{experience}</p>
                </div>
              </div>
            </div>
            {/* 2nd col */}
            <div className="col">
              <div className="about-right">
                <div className="section-header">
                  <span className="subtitle">{subTitle}</span>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <HoverImageLinks/>
      </div>
      <div>
        <ClipPathLinks/>
      </div>
    </div>
  )
}

export default About