import React, { useState, useEffect, useCallback } from 'react';
import './MortgageCal.css';

const MortgageCalculator = () => {
  const [principal, setPrincipal] = useState(200000); // Default value for the slider
  const [interestRate, setInterestRate] = useState('');
  const [years, setYears] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculatePayment = useCallback(() => {
    const principalAmount = parseFloat(principal);
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(years) * 12;

    if (isNaN(principalAmount) || isNaN(monthlyInterestRate) || isNaN(numberOfPayments) || numberOfPayments <= 0) {
      setMonthlyPayment(null);
      return;
    }

    const payment = principalAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    setMonthlyPayment(payment.toFixed(2));
  }, [principal, interestRate, years]);

  useEffect(() => {
    if (principal && interestRate && years) {
      calculatePayment();
    }
  }, [principal, interestRate, years, calculatePayment]);

  return (
  <div className='calculator'>
      <div className="calculator-container">
        <h1>Mortgage Calculator</h1>
        <p>
          Use our mortgage calculator to get accurate estimates for your monthly mortgage payments.
        </p>
        <div className="result-container">
          <div>
            <h2>Home Price</h2>
            <label className="input-label">
              $ <input
                type="number"
                placeholder="Home Price"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
              />
            </label>
            <input 
            className='c-range'
              type="range"
              min="50000"
              max="1000000"
              step="1000"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </div>
          <div>
            <h2>Monthly Payment</h2>
            {monthlyPayment ? (
              <p className="result-text">${monthlyPayment}/mo</p>
            ) : (
              <p className="result-text">--</p>
            )}
          </div>
        </div>
        <div className="input-row">
          <input
            type="text"
            placeholder="ZIP code"
          />
          <input
            type="text"
            placeholder="Down Payment"
          />
          <input
            type="number"
            placeholder="Interest Rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
          <select
            value={years}
            onChange={(e) => setYears(e.target.value)}
          >
            <option value="" disabled>
              Length of Loan
            </option>
            <option value="15">15 years</option>
            <option value="20">20 years</option>
            <option value="30">30 years</option>
          </select>
        </div>
        <button className="pre-approve-button">
          Get Pre-approved
        </button>
      </div>
      </div>
  );
};

export default MortgageCalculator;
