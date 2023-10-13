import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import './NewCta.css';
import '../Media-queries.css';


function NewCta() {
  return (
    <>
     <section className="cta-section">
        <div className="container flex cta-section-container">
           <h2>Start Testing Today</h2>
           <p>Take the guesswork out of design decisions</p>
           <NavLink to="#" className='primary-button'>Get Started</NavLink>
        </div>
     </section>
    </>
  )
}

export default NewCta