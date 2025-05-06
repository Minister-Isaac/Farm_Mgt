import React from 'react';
import './FarmBenefits.css';
import farmImage from '../assets/image5.png'; 
import { useNavigate } from 'react-router-dom';

const FarmBenefits = () => {
   const navigate = useNavigate();
  
    const handleJoinClick = () => {
      navigate('/auth');
    };
  
  return (
    <div>
      <section className="benefits">
        <h2>Benefits of Farm Management <br />System</h2>
        <div className="benefits-content">
          <div className="benefit">
            <span className="icon">🌿</span>
            <p><strong>Enhanced Productivity and Efficiency:</strong> Automated data collection and analysis tools streamline operations, enabling informed decisions and increasing overall productivity on the farm.</p>
          </div>
          <div className="benefit">
            <span className="icon">💰</span>
            <p><strong>Cost Savings:</strong> Optimize resource allocation, reduce waste, and minimize operational costs, leading to improved profitability and sustainable farming practices.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="cta-text">
          <h2>Start Tracking Today</h2>
          <p>
            Join FarmTrack now to monitor your farm’s growth and maximize productivity.
            Registration is quick and easy—get started now!
          </p>
          <button onClick={handleJoinClick}>Join for free</button>
        </div>
        <div className="cta-image">
          <img src={farmImage} alt="Farmers in the field" />
        </div>
      </section>
    </div>
  );
};

export default FarmBenefits;
