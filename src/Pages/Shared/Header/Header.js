import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import useAuth from '../../../hooks/useAuth';
import myLogo from '../../../images/logo/logo1.png'
import './Header.css'

const Header = () => {
//   const { user, logOut} = useAuth();
    return (
    <Navbar bg="dark" variant="dark"  sticky="top" collapseOnSelect expand="lg" className="nav-bar">
      <Container>
      <img src={myLogo} alt="" width="25%"/>
        <Navbar.Brand href="#home"></Navbar.Brand>
         <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
          <Nav.Link as={HashLink} to="/home#services">Our Services</Nav.Link>
          <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
          <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>
          <Navbar.Text>
              <a href="#login"></a>
          </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    );
};

export default Header;