import React from 'react';
import './Features.css';
import cropImg from '../assets/image2.png';
import weatherImg from '../assets/image3.png';
import irrigationImg from '../assets/image4.png';

const featuresData = [
  {
    img: cropImg,
    title: "Crop Monitoring",
    desc1: "Real-time data to optimize crop health.",
    desc2: "Track growth and detect issues early.",
  },
  {
    img: weatherImg,
    title: "Weather Insights",
    desc1: "Detailed forecasts tailored for farms.",
    desc2: "Plan activities around weather conditions.",
  },
  {
    img: irrigationImg,
    title: "Smart Irrigation",
    desc1: "Efficient water usage for sustainability.",
    desc2: "Automated systems to reduce costs.",
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="features-heading">Features Overview</h2>
      <div className="features-container">
        {featuresData.map((item, index) => (
          <div className="feature-card" key={index}>
            <img src={item.img} alt={item.title} className="feature-image" />
            <h4 className="feature-title">{item.title}</h4>
            <p>{item.desc1}</p>
            <p>{item.desc2}</p>
            <button className="feature-btn">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
