// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Github, Twitter, Slack, Mail } from 'lucide-react';

const Footer = () => {
  const footerStyle = {
    background: 'rgba(13, 17, 23, 0.97)',
    borderTop: '1px solid rgba(99, 102, 106, 0.2)',
    backdropFilter: 'blur(8px)'
  };

  const socialIconStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const linkHoverStyle = {
    transition: 'all 0.2s ease',
    '&:hover': {
      color: '#3b82f6 !important',
      textDecoration: 'none'
    }
  };

  return (
    <footer style={footerStyle} className="py-5">
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <h5 className="fw-bold text-light mb-3">
              <span className="text-primary me-2">⚡</span>
              Godspeed
            </h5>
            <p className="text-light-emphasis mb-4">
              Modern meta-framework for building event-driven APIs and services with Node.js and Bun.js.
            </p>
            <div className="d-flex gap-3">
              <div style={socialIconStyle} className="hover-effect">
                <Github size={20} color="#e6edf3" />
              </div>
              <div style={socialIconStyle} className="hover-effect">
                <Twitter size={20} color="#e6edf3" />
              </div>
              <div style={socialIconStyle} className="hover-effect">
                <Slack size={20} color="#e6edf3" />
              </div>
              <div style={socialIconStyle} className="hover-effect">
                <Mail size={20} color="#e6edf3" />
              </div>
            </div>
          </Col>
          
          <Col lg={8}>
            <Row>
              <Col sm={4} className="mb-4">
                <h6 className="text-light fw-semibold mb-3">Resources</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#" className="text-light-emphasis text-decoration-none footer-link">Documentation</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-light-emphasis text-decoration-none footer-link">Tutorials</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-light-emphasis text-decoration-none footer-link">Examples</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-light-emphasis text-decoration-none footer-link">Blog</a>
                  </li>
                </ul>
              </Col>
              <Col sm={4} className="mb-4">
                <h6 className="text-light fw-semibold mb-3">Community</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#" className="text-light-emphasis text-decoration-none footer-link">GitHub</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-light-emphasis text-decoration-none footer-link">Discord</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-light-emphasis text-decoration-none footer-link">Twitter</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-light-emphasis text-decoration-none footer-link">Contribute</a>
                  </li>
                </ul>
              </Col>
              <Col sm={4} className="mb-4">
                <h6 className="text-light fw-semibold mb-3">Company</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#" className="text-light-emphasis text-decoration-none footer-link">About</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-light-emphasis text-decoration-none footer-link">Team</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-light-emphasis text-decoration-none footer-link">Careers</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-light-emphasis text-decoration-none footer-link">Contact</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        
        <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(99, 102, 106, 0.2)' }}>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="text-light-emphasis mb-3 mb-md-0">© {new Date().getFullYear()} Godspeed Systems. All rights reserved.</p>
            <div className="d-flex gap-4">
              <a href="#" className="text-light-emphasis text-decoration-none small footer-link">Privacy Policy</a>
              <a href="#" className="text-light-emphasis text-decoration-none small footer-link">Terms of Service</a>
              <a href="#" className="text-light-emphasis text-decoration-none small footer-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </Container>
      
      <style jsx>{`
        .footer-link {
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #3b82f6 !important;
          text-decoration: none;
        }
        .hover-effect {
          transition: all 0.2s ease;
        }
        .hover-effect:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;