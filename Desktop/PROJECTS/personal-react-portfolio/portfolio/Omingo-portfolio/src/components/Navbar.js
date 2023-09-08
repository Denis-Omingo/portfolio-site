import "./NavBarStyles.css";
import profilePic from '../assets/Home.jpeg';

import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {FaBars,FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick]=useState(false);
    const handleClick=()=>setClick(!click);

    const[color, setColor]=useState(false);
    const changeColor=()=>{
        if(window.scrollY >=100){
            setColor(true);
        }else{
            setColor(false);
        }

     window.addEventListener("scroll",changeColor);   
    }
  return (
    <div className={color? "header header-bg":"header"}>

        <div className="profile">
            <Link to="/contact"><img src={profilePic }/></Link>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
        </div>

        <ul className={click? "nav-menu active":"nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Projects</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click?(
            <FaTimes size={20}  />):(<FaBars size={20}/>)}
        </div>
    </div>
  )
}

export default Navbar
