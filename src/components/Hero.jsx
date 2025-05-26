import React from 'react';
import './Hero.css';
import heroImage from '../assets/erasebg-transformed (1).png'; // Add image with transparent background
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import heroImage2 from '../assets/erasebg-transformed (2).png'; // Add image with transparent background

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
  Unboxing<br></br> Cinematic Magic<br></br> 
</h1>

        <p>CineBox brings your stories to life with expert videography and photography. Rent pro gear or book us for your next event.</p>
        <button className="cta-btn">
        Explore the collection<IoIosArrowRoundForward  className="cta"/></button>
      </div>
      <div className="hero-image">
      <img src={heroImage} alt="Cinematic scene" />
      </div>
    </section>
  );
}

export default Hero;
