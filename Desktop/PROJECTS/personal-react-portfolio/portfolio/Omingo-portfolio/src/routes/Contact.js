import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage2 from '../components/HeroImage2';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <HeroImage2 title="Contact Me" text="Let's Make Your Next Project a Success"/>
        <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
