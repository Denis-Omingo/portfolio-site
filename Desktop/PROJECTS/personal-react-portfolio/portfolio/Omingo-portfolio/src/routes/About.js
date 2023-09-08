import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage2 from '../components/HeroImage2';
import AboutContent from '../components/AboutContent';


const About = () => {
  return (
    <div>
       <Navbar/>
       <HeroImage2 title="ABOUT ME" text="I Will Make You a Responsive Website"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
