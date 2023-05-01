import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ScrollHandler from './components/ScrollHandler';
import Navbar from './components/Navbar';
import { Col,Row } from 'react-bootstrap';
import Page from './layout/Page';

class App extends React.Component {
  render(){
    return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ScrollHandler/>
      {/* <Row> */}
      <div className='d-flex'>
      <Col xs={5} id="sidebar-wrapper">
      <Navbar/>
      </Col>
      <Col xs={7} id="page-content-wrapper">
      <Page/>
      </Col>
      </div>
      
      {/* </Row> */}
    </div>
  );
  }
  
}

export default App;
