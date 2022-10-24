import React from 'react';
import './heroBanner.css';
import HeroBannerImage from '../assets/images/fitness-model.jpg';

const HeroBanner = () => {
  return (
    <div className="hero-main">
      <div className="hero-wrapper">
        <p className="hero-head">Fitness Club</p>
        <p className="hero-slogan">
          Sweat, Smile <br /> And Repeat
        </p>
        <p className="hero-check">Check out the mose effective exercises</p>
        {/* <button className="hero-button">Explore Exercises</button> */}
        <a className="hero-button" href="#exercises">
          Explore Exercises
        </a>
        <p className="hero-exercise">Exercise</p>
      </div>
      <div className="hero-wrapphoto">
        <img className="hero-photo" src={HeroBannerImage} alt="hero" />
      </div>
    </div>
  );
};

export default HeroBanner;
