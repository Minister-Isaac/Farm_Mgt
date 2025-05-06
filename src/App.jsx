import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import FarmBenefits from './FarmBenefits/FarmBenefits';
import Footer from './Footer/Footer';
import AuthForm from './AuthForm/AuthFOrm';
import OngoingActivities from './OngoingActivities/OngoingActivities'; 
import ActivityDashboard from './ActivityDashboard/ActivityDashboard';

const Home = () => (
  <>
    <Hero />
    <Features />
    <FarmBenefits />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/activity" element={<OngoingActivities />} />
        <Route path="/reporting" element={<ActivityDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
