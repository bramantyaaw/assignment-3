import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Interest from "./Interest";
import Awards from "./Awards";

class Page extends React.Component {
  render() {
    return (
      <>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Interest />
        <Awards />
      </>
    );
  }
}

export default Page;
