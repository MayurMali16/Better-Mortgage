import React from 'react';
import './StartApproval.css';
import CountUp from 'react-countup';


const StartApproval = () => {
  return (
    <div className='start-approval'>
      <div className="top-bar">
        <h3>Better<br/> Mortgage</h3>
        <div className="contact-info">
        <i className="fa-solid fa-phone"></i>
          <span className="need-help"><b>Need help? Call (415) 523 8837</b></span>
        </div>
      </div>
      <div className="start-approval-container">
        <div className="start-approval-content">
          <h1>Hi, I'm Betty!</h1>
          <h2>What can I help you with?</h2>
          <div className="options-container">
            <button className="option-button">
              <span className="option-icon">🏠</span>
              Buying a home
            </button>
            <button className="option-button">
              <span className="option-icon">🔄</span>
              Refinance my mortgage
            </button>
            <button className="option-button">
              <span className="option-icon">💵</span>
              Get cash from my home
            </button>
          </div>
          <div className="stats-container">
            <div className="stat-item">
              <h3>
                <CountUp end={100} duration={2.75} separator="," prefix="$" suffix="B" />
              </h3>
              <p>home loans funded entirely online</p>
            </div>
            <div className="stat-item">
              <h3>
                <CountUp end={400} duration={2.75} separator="," suffix="K" />
              </h3>
              <p>customers who chose a Better Mortgage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartApproval;

