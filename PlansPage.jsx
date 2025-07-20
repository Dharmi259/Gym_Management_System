import React from 'react';
import './PlansPage.css';

const PlansPage = () => {
  return (
    <div className="plans-page">
      <h1>Membership Plans</h1>
      <div className="plans">
        <div className="plan-card basic">
          <h2>Basic Plan</h2>
          <p>₹499 / month</p>
          <ul>
            <li>Gym Access</li>
            <li>1 Personal Trainer</li>
          </ul>
        </div>

        <div className="plan-card standard">
          <h2>Standard Plan</h2>
          <p>₹999 / month</p>
          <ul>
            <li>Gym + Group Classes</li>
            <li>2 Personal Trainers</li>
          </ul>
        </div>

        <div className="plan-card premium">
          <h2>Premium Plan</h2>
          <p>₹1499 / month</p>
          <ul>
            <li>All Access + Sauna</li>
            <li>Unlimited Trainers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;
