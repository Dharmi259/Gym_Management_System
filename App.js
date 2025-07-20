import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Import pages
import HomePage from './pages/Home';
import PlansPage from './pages/PlansPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import AddMemberPage from './pages/AddMemberPage';
import UserDashboard from './pages/UserDashboard';
import TrainerPage from "./pages/TrainerPage";
import TrainerManagement from './pages/TrainerManagement';
import PaymentTracking from './pages/PaymentTracking';
import PaymentPage from './pages/PaymentPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/add-member" element={<AddMemberPage />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/trainers" element={<TrainerPage />} />
        <Route path="/trainers" element={<TrainerManagement />} />
        <Route path="/payments" element={<PaymentTracking />} />
        <Route path="/payments" element={<PaymentPage />} />



      </Routes>
    </Router>
  );
}

export default App;
