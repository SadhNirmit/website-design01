import React from "react";
import BigFeatures from "../components/BigFeatures";
import Company from "../components/Company";
import Example from "../components/Example";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewCta from "../components/NewCta";
import SubFooter from "../components/SubFooter";
import "./Home.css";
import '../Media-queries.css';


function Home() {
  return <>
  <Header />
  <Company />
  <Features />
  <BigFeatures />
  <Example />
  <NewCta />
  <Footer />
  <SubFooter />
  </>;
}

export default Home;
