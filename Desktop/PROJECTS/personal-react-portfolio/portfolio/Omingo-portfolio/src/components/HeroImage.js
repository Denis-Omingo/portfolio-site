import './HeroImageStyles.css';
import React from 'react'
import IntroImg from '../assets/Home.jpeg';
import {Link} from 'react-router-dom';
//import Typewriter from 'typewriter-effect';

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="introImg"/>
        </div>
        <div className='content'>
            <p>
              HI, THIS IS DENIS OMINGO
              {/*<Typewriter
  onInit={(typewriter) => {
    
    typewriter.typeString('HI I AM DENIS OMINGO')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(50)
      .deleteAll()
      .callFunction(() => {
       
        console.log('All strings were deleted');
      })
      .start();
  }}
/>*/}</p>
            <h1> A React Web Developer</h1>
            <div>
            <Link to="/project" className='btn'>Projects</Link>
            <Link to="/contact" className='btn-light'>Contacts</Link>      
        </div>
        </div>
        
      
    </div>
  )
}

export default HeroImage
