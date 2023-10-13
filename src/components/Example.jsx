import React from "react";
import "../App.css";
import "./Example.css";
import { NavLink } from "react-router-dom";
import '../Media-queries.css';



function Example() {
  return (
    <>
      <section className="examples-section">
        <div className="container">
          <div className="example-header flex">
            <h2 className="example-heading-text">
            One platform, endless possibilities
            </h2>
            <NavLink to="#" className="secondary-button">
              See all Example <i className="fa-solid fa-right-long"></i>
            </NavLink>
          </div>
          <div className="example-area flex">
            <NavLink to="#" className="example-card">
                <h3 className="card-text">Can users complete a task in my software interface?</h3>
            </NavLink>
            <NavLink to="#" className="example-card">
                <h3 className="card-text">Can users complete a task in my software interface?</h3>
            </NavLink>
            <NavLink to="#" className="example-card">
                <h3 className="card-text">Can users complete a task in my software interface?</h3>
            </NavLink>
            <NavLink to="#" className="example-card">
                <h3 className="card-text">Can users complete a task in my software interface?</h3>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Example;
