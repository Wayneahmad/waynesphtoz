import React from "react";
import "../styles/Pricing.css";

function Pricing() {
  return (
    <div className="pricing-container">
      <div className="pricing-plan">
        <div className="plan-title">Basic</div>
        <div className="plan-price">$11.99/month</div>
        <ul className="plan-features">
          <li>10GB Storage</li>
          <li>1 User</li>
          <li>Basic Support</li>
        </ul>
        <button className="plan-button">Sign Up</button>
      </div>
      <div className="pricing-plan">
        <div className="plan-title">Standard</div>
        <div className="plan-price">$19.99/month</div>
        <ul className="plan-features">
          <li>50GB Storage</li>
          <li>5 Users</li>
          <li>Phone & Email Support</li>
        </ul>
        <button className="plan-button">Sign Up</button>
      </div>
      <div className="pricing-plan">
        <div className="plan-title">Premium</div>
        <div className="plan-price">$49.99/month</div>
        <ul className="plan-features">
          <li>100GB Storage</li>
          <li>10 Users</li>
          <li>24/7 Support</li>
        </ul>
        <button className="plan-button">Sign Up</button>
      </div>
    </div>
  );
}

export default Pricing;
