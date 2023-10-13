import React from "react";
import '../App.css';
import './BigFeatures.css';
import '../Media-queries.css';

function BigFeatures() {
  return (
    <>
      <section className="big-features-section">
        <div className="container flex big-feature-container">
          <div className="feature-img">
            <img
              src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b44330a05b1ce09edcc052e_home_designer.png"
              alt=""
            />
          </div>
          <div className="feature-desc flex">
            <h4>Effortless validation for</h4>
            <h3>Design professionals</h3>
            <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users</p>
          </div>
        </div>
      </section>

      <section className="big-features-section">
        <div className="container flex big-feature-container" id="second-big-feature">
        <div className="feature-img">
            <img
              src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b44330a6c5dba54a973c215_home_marketer.png"
              alt=""
            />
          </div>
          <div className="feature-desc flex">
            <h4>Effortless validation for</h4>
            <h3>Design professionals</h3>
            <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users</p>
          </div>
        </div>
      </section>

      <section className="big-features-section">
        <div className="container flex big-feature-container" >
          <div className="feature-img">
            <img
              src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b44330a049e86cae8ae66e5_home_manager.png"
              alt=""
            />
          </div>
          <div className="feature-desc flex">
            <h4>Effortless validation for</h4>
            <h3>Design professionals</h3>
            <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default BigFeatures;
