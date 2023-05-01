import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <Nav className="col-md-4 d-none d-md-block bg-light sidebar">
          {/* <ul>
            <li> */}
          <Nav.Item>
            <Nav.Link>
              <Link to="/#home">Home</Link>
            </Nav.Link>
          </Nav.Item>
          {/* </li> */}
          {/* <li> */}
          <Nav.Item>
            <Nav.Link>
              <Link to="/#about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/#experience">Experience</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/#skills">Skills</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/#interest">Interest</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/#awards">Awards</Link>
            </Nav.Link>
          </Nav.Item>
          {/* </ul> */}
        </Nav>
      </>
    );
  }
}

export default Navbar;
