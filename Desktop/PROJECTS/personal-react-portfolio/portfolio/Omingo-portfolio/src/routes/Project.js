import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage2 from '../components/HeroImage2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 title="PROJECTS." text="Here are my previous projects"/>
      <PricingCard/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
