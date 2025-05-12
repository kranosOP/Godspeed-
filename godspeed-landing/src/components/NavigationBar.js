import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button, Offcanvas } from 'react-bootstrap';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar appearance on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active link based on scroll position
      const sections = ['home', 'about', 'features', 'team', 'pricing'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveLink(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling for navigation links
  const scrollToSection = (sectionId) => {
    setActiveLink(sectionId);
    setShowMobileMenu(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      console.log(`Scrolling to ${sectionId}:`, element);
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    } else {
      console.error(`Element with ID '${sectionId}' not found!`);
    }
  };

  const navbarStyle = {
    background: scrolled 
      ? 'rgba(13, 17, 23, 0.95)' 
      : 'rgba(13, 17, 23, 0.75)',
    backdropFilter: 'blur(8px)',
    borderBottom: scrolled ? '1px solid rgba(99, 102, 106, 0.2)' : 'none',
    transition: 'all 0.3s ease',
    boxShadow: scrolled ? '0 4px 12px rgba(0, 0, 0, 0.05)' : 'none'
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'team', label: 'Team' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'docs', label: 'Docs', external: true, href: 'https://godspeed.systems/docs/' }
  ];

  return (
    <Navbar
      expand="lg"
      style={navbarStyle}
      variant="dark"
      className="fixed-top"
      expanded={showMobileMenu}
    >
      <Container>
        <Navbar.Brand 
          onClick={() => scrollToSection('home')} 
          className="fw-bold d-flex align-items-center cursor-pointer"
          style={{ cursor: 'pointer' }}
        >
          <span className="text-primary me-2">⚡</span>
          Godspeed
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map(link => (
              link.external ? (
                <Nav.Link 
                  key={link.id}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mx-2 d-flex align-items-center"
                >
                  {link.label} <i className="bi bi-box-arrow-up-right ms-1" style={{ fontSize: '0.8rem' }}></i>
                </Nav.Link>
              ) : (
                <Nav.Link 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`mx-2 ${activeLink === link.id ? 'text-primary fw-bold' : 'text-light-emphasis'}`}
                  aria-current={activeLink === link.id ? 'page' : undefined}
                >
                  {link.label}
                </Nav.Link>
              )
            ))}
          </Nav>
          <div className="ms-lg-3 mt-3 mt-lg-0">
            <Button variant="outline-primary" className="me-2 px-3">Login</Button>
            <Button 
              variant="primary" 
              className="px-3"
              onClick={() => window.open('https://studio.godspeed.systems/', '_blank')}
            >
              Get Started
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
