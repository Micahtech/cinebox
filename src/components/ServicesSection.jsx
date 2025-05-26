import React, { useState } from 'react';
import {FaArrowCircleLeft } from "react-icons/fa";
import './ServicesSection.css';
import { BsArrowRightCircle } from "react-icons/bs";

const servicesData = [
  {
    title: 'Cinematography',
    description: 'We deliver cinematic-quality video production for weddings, events, and promotional content.'
  },
  {
    title: 'Photography',
    description: 'Professional photography services tailored for portraits, events, and commercial needs.'
  },
  {
    title: 'Rentals',
    description: 'Affordable rental options for cameras, lenses, and professional studio lighting equipment.'
  }
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="services-section">
      <div className="services-intro">
        <h2>Services We Offer</h2>
        <p>
        We offer professional cinematography, photography, and event coverage services tailored to capture your most important moments. From video shoots to stills, our team delivers high-quality visual content. We also provide equipment rentals, including cameras and studio lighting, to support your creative projects.


        </p>
      </div>
      <div className="services-list">
        {servicesData.map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className={`service-item ${isOpen ? 'open' : ''}`}>
            <div className={`service-header ${isOpen ? 'open' : ''}`} onClick={() => toggleService(index)}>
  <div className="service-title-wrapper">
    <span className={`service-title ${isOpen ? 'enlarged' : ''}`}>{service.title}</span>
    {isOpen && (
      <p className="service-description">{service.description}</p>
    )}
  </div>
  {isOpen ? (
    <FaArrowCircleLeft className="chevron-icon" />
  ) : (
    <BsArrowRightCircle className="chevron-icon" />
  )}
</div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
