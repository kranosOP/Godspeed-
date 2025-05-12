
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Github, Twitter, Slack, Mail, ArrowRight, CheckCircle } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you would implement actual newsletter subscription logic
    if (email.trim() !== '') {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="footer-wrapper py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={5} className="mb-4 mb-lg-0">
            <div className="mb-4">
              <h5 className="fw-bold text-light mb-3">
                <span className="text-primary me-2">⚡</span>
                Godspeed
              </h5>
              <p className="text-light-emphasis mb-4">
                Modern meta-framework for building event-driven APIs and services 
                with Node.js and Bun.js. Accelerate your development process.
              </p>
            </div>
            
            <div className="newsletter-box p-4 mb-4">
              <h6 className="text-light mb-3">Stay updated with our latest releases</h6>
              <Form onSubmit={handleSubscribe} className="d-flex">
                <Form.Control
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.value)}
                  className="me-2 footer-input"
                  required
                />
                <Button 
                  type="submit" 
                  variant="primary"
                  className="subscribe-btn d-flex align-items-center"
                >
                  {subscribed ? (
                    <CheckCircle size={18} className="me-1" />
                  ) : (
                    <ArrowRight size={18} />
                  )}
                </Button>
              </Form>
              {subscribed && (
                <small className="text-success mt-2 d-block">
                  Thanks for subscribing!
                </small>
              )}
            </div>
            
            <div className="d-flex gap-3">
              <a href="https://github.com/godspeedsystems/godspeed" 
                 className="social-icon" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" 
                 className="social-icon" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" 
                 className="social-icon" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="Slack">
                <Slack size={20} />
              </a>
              <a href="mailto:info@godspeed.systems" 
                 className="social-icon"
                 aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </Col>
          
          <Col lg={7}>
            <Row>
              <Col sm={4} className="mb-4">
                <h6 className="text-light fw-semibold mb-3">Resources</h6>
                <ul className="list-unstyled footer-links">
                  <li>
                    <a href="https://godspeed.systems/docs/" target="_blank" rel="noopener noreferrer">Documentation</a>
                  </li>
                  <li>
                    <a href="#">Tutorials</a>
                  </li>
                  <li>
                    <a href="#">Examples</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="https://studio.godspeed.systems/" target="_blank" rel="noopener noreferrer">Godspeed Studio</a>
                  </li>
                </ul>
              </Col>
              <Col sm={4} className="mb-4">
                <h6 className="text-light fw-semibold mb-3">Community</h6>
                <ul className="list-unstyled footer-links">
                  <li>
                    <a href="https://github.com/godspeedsystems/godspeed" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </li>
                  <li>
                    <a href="#">Discord</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Contribute</a>
                  </li>
                  <li>
                    <a href="https://chatgpt.com/g/g-Zsh9qhlGw-vishwakarma" target="_blank" rel="noopener noreferrer">GPT Assistant</a>
                  </li>
                </ul>
              </Col>
              <Col sm={4} className="mb-4">
                <h6 className="text-light fw-semibold mb-3">Company</h6>
                <ul className="list-unstyled footer-links">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">VS Code Extension</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        
        <div className="footer-bottom pt-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="text-light-emphasis mb-3 mb-md-0">
              © {new Date().getFullYear()} Godspeed Systems. All rights reserved.
            </p>
            <div className="d-flex gap-4 legal-links">
              <a href="#" className="text-light-emphasis small">Privacy Policy</a>
              <a href="#" className="text-light-emphasis small">Terms of Service</a>
              <a href="#" className="text-light-emphasis small">Cookie Policy</a>
            </div>
          </div>
        </div>
      </Container>
      
      <style jsx>{`
        .footer-wrapper {
          background: linear-gradient(180deg, rgba(13, 17, 23, 0.97) 0%, rgba(13, 17, 23, 0.99) 100%);
          border-top: 1px solid rgba(99, 102, 106, 0.2);
          backdrop-filter: blur(8px);
          position: relative;
          overflow: hidden;
        }
        
        .footer-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0));
        }
        
        .newsletter-box {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          border: 1px solid rgba(99, 102, 106, 0.2);
        }
        
        .footer-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(99, 102, 106, 0.3);
          color: #e6edf3;
        }
        
        .footer-input:focus {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25);
          color: #e6edf3;
        }
        
        .subscribe-btn {
          width: 44px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        
        .social-icon {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(99, 102, 106, 0.2);
          color: #e6edf3;
          border-radius: 50%;
          width: 42px;
          height: 42px;
          padding: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .social-icon:hover {
          background: rgba(59, 130, 246, 0.15);
          border-color: rgba(59, 130, 246, 0.3);
          color: #3b82f6;
          transform: translateY(-2px);
        }
        
        .footer-links li {
          margin-bottom: 12px;
        }
        
        .footer-links a {
          color: rgba(230, 237, 243, 0.8);
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
          padding-left: 0;
        }
        
        .footer-links a::before {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: #3b82f6;
          transition: all 0.2s ease;
        }
        
        .footer-links a:hover {
          color: #3b82f6;
          padding-left: 5px;
        }
        
        .footer-links a:hover::before {
          width: 100%;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(99, 102, 106, 0.2);
        }
        
        .legal-links a {
          position: relative;
          transition: all 0.2s ease;
        }
        
        .legal-links a:hover {
          color: #3b82f6 !important;
        }
        
        @media (max-width: 767px) {
          .legal-links {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
            margin-top: 16px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
