// Navbar.js
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyle = {
    background: scrolled 
      ? 'rgba(13, 17, 23, 0.95)' // Slightly different dark color with opacity when scrolled
      : 'rgba(13, 17, 23, 0.75)', // Semi-transparent when at top
    backdropFilter: 'blur(8px)',
    borderBottom: scrolled ? '1px solid rgba(99, 102, 106, 0.2)' : 'none',
    transition: 'all 0.3s ease'
  };

  return (
    <Navbar
      expand="lg"
      style={navbarStyle}
      variant="dark"
      className="fixed-top"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold d-flex align-items-center">
          <span className="text-primary me-2">⚡</span>
          Godspeed
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-2 text-light">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-2 text-light-emphasis">About</Nav.Link>
            <Nav.Link href="#features" className="mx-2 text-light-emphasis">Features</Nav.Link>
            <Nav.Link href="#team" className="mx-2 text-light-emphasis">Team</Nav.Link>
            <Nav.Link href="#pricing" className="mx-2 text-light-emphasis">Pricing</Nav.Link>
          </Nav>
          <div className="ms-lg-3 mt-3 mt-lg-0">
            <Button variant="outline-primary" className="me-2 px-3">Login</Button>
            <Button variant="primary" className="px-3">Get Started</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;