import React from 'react';
import './UserDashboard.css';

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <h1>Welcome, Member!</h1>

      <div className="user-info">
        <p><strong>Name:</strong> Dharmi Patel</p>
        <p><strong>Membership Plan:</strong> Gold</p>
        <p><strong>Joined On:</strong> 01-July-2025</p>
        <p><strong>Status:</strong> Active</p>
      </div>

      <div className="user-actions">
        <button>Edit Profile</button>
        <button>View Attendance</button>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default UserDashboard;
