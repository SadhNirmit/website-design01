import React from "react";
import "../App.css";
import "./Features.css";
import { NavLink } from "react-router-dom";
import '../Media-queries.css';


function Features() {
  return (
    <>
      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <h2 className="features-heading-text">
              Your user research Swiss Army knife
            </h2>
            <NavLink to="#" className="secondary-button">
              See all features <i className="fa-solid fa-right-long"></i>
            </NavLink>
          </div>
          <div className="features-area flex">
            <div className="features-card flex">
              <img
                src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/6355e6254d0d41e7d3aa16c0_card-sorting.svg"
                alt=""
              />
              <h3>Web Desiging</h3>
              <p>Discover how people group and label information</p>
              <NavLink to="#" className="secondary-button">
              Learn More <i className="fa-solid fa-right-long"></i>
            </NavLink>
            </div>
            <div className="features-card flex">
              <img
                src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/619f1c2ab5d65ddab8ae52db_prototype-testing.svg"
                alt=""
              />
              <h3>Web Desiging</h3>
              <p>Discover how people group and label information</p>
              <NavLink to="#" className="secondary-button">
              Learn More <i className="fa-solid fa-right-long"></i>
            </NavLink>
            </div>
            <div className="features-card flex">
              <img
                src="https://assets-global.website-files.com/6101f41d07abfab7b5f57c84/6101f41d07abfa81f8f57cde_click-analysis.svg"
                alt=""
              />
              <h3>Web Desiging</h3>
              <p>Discover how people group and label information</p>
              <NavLink to="#" className="secondary-button">
              Learn More <i className="fa-solid fa-right-long"></i>
            </NavLink>
            </div>
            <div className="features-card flex">
              <img
                src="https://assets-global.website-files.com/6101f41d07abfab7b5f57c84/6101f41d07abfa567af57cc3_surveys.svg"
                alt=""
              />
              <h3>Web Desiging</h3>
              <p>Discover how people group and label information</p>
              <NavLink to="#" className="secondary-button">
              Learn More <i className="fa-solid fa-right-long"></i>
            </NavLink>
            </div>
            <div className="features-card flex">
              <img
                src="https://assets-global.website-files.com/6101f41d07abfab7b5f57c84/6101f41d07abfa0fd5f57cd6_Head%20icon.svg"
                alt=""
              />
              <h3>Web Desiging</h3>
              <p>Discover how people group and label information</p>
              <NavLink to="#" className="secondary-button">
              Learn More <i className="fa-solid fa-right-long"></i>
            </NavLink>
            </div>
            <div className="features-card flex">
              <img
                src="https://assets-global.website-files.com/6101f41d07abfab7b5f57c84/6101f41d07abfaefeaf57cd8_five-second-test.svg"
                alt=""
              />
              <h3>Web Desiging</h3>
              <p>Discover how people group and label information</p>
              <NavLink to="#" className="secondary-button">
              Learn More <i className="fa-solid fa-right-long"></i>
            </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
