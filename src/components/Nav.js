import React from 'react';
import { Nav, Navbar, Form, FormControl, NavDropdown, Button } from 'react-bootstrap';
import icon from '../images/icon.png';

export const NavigationBar = () => (

    <div >
        
  console.log(window.innerWidth)
 <Navbar bg="light" variant="light" fixed='top'>
     
     <img src={icon} width="200" height="200" />


    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#Gallery">Gallery</Nav.Link>
      <Nav.Link href="#Review">Review</Nav.Link>
      <Nav.Link href="#Dowload App">Download App</Nav.Link>
    </Nav>
    <Button variant="outline-success">Login</Button>{' '}
    <Button variant="outline-success" style={{marginLeft: 16}}>Sign Up</Button>{' '}
    <br></br>
    <div style={{marginLeft: 10}}>
        <h3>Select Language</h3>
        <h3>English</h3>
        <h3>Telugu</h3>

    </div>
   </Navbar>
  </div>
)