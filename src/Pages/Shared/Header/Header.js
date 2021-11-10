import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import myLogo from '../../../images/logo/logo1.png'
import './Header.css'

const Header = () => {
  const { user, logOut} = useAuth();
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
          <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
          <Navbar.Text>
            <a href="/login">{user?.displayName}</a>
          </Navbar.Text>
         {user?.email ? 
         <Button onClick={logOut} variant="light">Log Out</Button>
         :
          <Nav.Link as={HashLink} to="/register">Sign Up</Nav.Link>
          }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    );
};

export default Header;