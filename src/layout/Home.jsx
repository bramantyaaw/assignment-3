import React, { Component, Fragment } from "react";
import Person from "../assets/images/man.png";

class Home extends React.Component {
  render() {
    return (
      <div id="home" className="center py-5">
        <Fragment>
          <div>
            <img src={Person} className="img" />
          </div>
          <h3 className="text-center">Bramantya Adi Winarto</h3>
        </Fragment>
      </div>
    );
  }
}

export default Home;
