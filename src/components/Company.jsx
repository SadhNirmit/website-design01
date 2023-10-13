import React from "react";
import '../App.css';
import './Company.css';
import '../Media-queries.css';


function Company() {
  return (
    <>
      <section className="companies-section">
        <div className="container">
          <div className="small-blod-text companies-header">
            The world’s best companies rely on UsabilityHub to make better
            design decisions.
          </div>
          <div className="logos flex">
            <img className="logo" src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b46e726a0fccf7d78d81585_logo_amazon.png" alt="" />
            <img src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b46e8e6b998def81a004629_logo_google.png" alt="" className="logo" />
            <img src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b46e8e6a0fccf20fed815e3_logo_taskrabbit.png" alt="" className="logo" />
            <img src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b46e8e6ee75f135fc390ab6_logo_airtable.png" alt=""  className="logo"/>
            <img src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b46e726c3102cf1ebf0c2c0_logo_box.png" alt="" className="logo" />
            <img src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5f7fda34692422757a1b3768_godaddy.svg" alt="" className="logo" />
            <img src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b46e726a09814d84e5a21c2_logo_asana.png" alt="" className="logo" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Company;
