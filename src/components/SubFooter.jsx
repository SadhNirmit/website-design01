import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import './SubFooter.css';
import '../Media-queries.css';


function SubFooter() {
  return (
    <>
       <div className="sub-footer">
           <div className="container flex subfooter-container">
            <NavLink to="#" className="hover-link">Privacy policy</NavLink>
            <NavLink to="#" className="hover-link">Term & Condition</NavLink>
            <NavLink to="#" className="hover-link">Security Information</NavLink>
            <NavLink to="#" className="hover-link"><i className="fa-brands fa-facebook"></i></NavLink>
            <NavLink to="#" className="hover-link"><i className="fa-brands fa-twitter"></i></NavLink>
            <NavLink to="#" className="hover-link"><i className="fa-brands fa-linkedin"></i></NavLink>
           </div>
       </div>
    </>
  )
}

export default SubFooter