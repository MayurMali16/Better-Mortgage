// Homee.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Approval from '../assets/approval.png';

const Homee = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Mortgages<br/> made simple</h1>
      <div/>
      <div className="approval-section">
        <div className="approval-info-container">
          <button className="start-button" onClick={() => navigate("/start-approval")}>Start my approval</button>
          <div className="approval-info">
            <span role="img" aria-label="clock">⏱</span> 3 min | No credit impact
          </div>
        </div>
        <div className="image-container">
          <img src={Approval} alt="Approval" className="approval-image" />
        </div>
        <div className="google-review">
          <div className="stars">
            <span role="img" aria-label="star">⭐⭐⭐⭐⭐</span>
          </div>
          <div className="review-text">
            5 Stars | 3177 Google reviews
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homee;
