import React from 'react';
import './Hero.css';
import farmVideo from '../assets/video1.mp4'; 
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/auth');
  };

  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={farmVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Effortless Farm Management</h1>
          <p className="hero-subtitle">
            Streamline your farm operations and maximize productivity with ease.
          </p>
          <div className="hero-buttons">
            <button className="btn join" onClick={handleJoinClick}>
              Join us now
            </button>
            <button className="btn request">Request demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
