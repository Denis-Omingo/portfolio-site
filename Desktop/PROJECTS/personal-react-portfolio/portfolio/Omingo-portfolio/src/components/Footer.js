import './FooterStyles.css';

import React from 'react';
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { Link } from 'react-router-dom';
//import Typical from 'react-typical';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"rgb(248,217,15)", marginRight:"2rem"}}/>
                <p>Cecilia Singles A2. Ongata Rongai-Kenya</p>
            </div>

            <div className="phone">
              <h4><FaPhone size={20} style={{color:"rgb(248,217,15)", marginRight:"2rem"}}/>
            </h4>
            <p>+2541-138-907-09</p>
            
            </div>

            <div className="email">
              <h4> <FaMailBulk size={20} style={{color:"rgb(248,217,15)", marginRight:"2rem"}}/>
            </h4>
            <p>omingodenis7@gmail.com</p>
            
            </div>

        </div>

        <div className='center'>
         <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/project">Projects</Link> </li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
         </ul>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
                This is Denis Omingo. CEO and Founder of AmingozTech. I enjoy discussing new projects and design challenges.
          </p>
          
          <div className="social">
          
            <p>
            <Link to="https://www.facebook.com/profile.php?id=100081864196247" target="_blank">
              <FaFacebook
              size={30}
              style={{color:"rgb(248,217,15)",
              marginRight:"1rem"}} />
              </Link>
              </p>
            <p>

            <FaTwitter
          size={30}
          style={{color:"rgb(248,217,15)",
          marginRight:"1rem"}} className="social-icons"/>
            </p>
         
        <p>

        <FaLinkedin
          size={30}
          style={{color:"rgb(248,217,15)",
          marginRight:"1rem"}} className="social-icons"/>
        </p>

          </div>
        </div>
        </div>
      
    </div>
  )
}

export default Footer
