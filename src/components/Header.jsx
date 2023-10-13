import React from 'react';
import '../App.css';
import './Header.css';
import { NavLink } from "react-router-dom";
import '../Media-queries.css';



function Header() {
  return (
     <>
      <header>
        <div className="container header-section flex">
            <div className="header-left">
                <h1>Design Confidently</h1>
                <p>UsabilityHub is a remote user research platform that takes the guesswork out of design decisions by validating them with real users.</p>
                <NavLink to="#" className="primary-button get-started-btn">Get Started</NavLink>
            </div>
            <div className="header-right">
                <img src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b442d9ca51a7f5b711e6d60_home_mast.png" alt="" />
                {/* <img src="https://www.saritasa.com/wp-content/themes/saritasa/includes/assets/images/Home_BG.webp" alt="" /> */}
            </div>
        </div>
      </header>
     </>
  )
}

export default Header