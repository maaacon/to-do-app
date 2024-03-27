import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarCollapse } from 'react-bootstrap';
import '../../assets/images/company-logo-2.png';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar expand='lg' className='bg-body-tertiary fixed-top shadow-sm'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              src='src/assets/images/company-logo-2.png'
              height='27'
              className='d-inline-block align-top'
              alt='React Bootstrap'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#contact'>Contact</Nav.Link>
              <Nav.Link href='#about'>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
