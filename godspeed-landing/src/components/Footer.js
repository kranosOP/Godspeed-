
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
                  onChange={(e) => setEmail(e.target.value)}
                  className="me-2 footer-input"
                  required
                />
                <Button 
                  type="submit" 
                  variant="primary"
                  className="subscribe-btn d-flex align-items-center justify-content-center"
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
                    <a href="https://marketplace.visualstudio.com/items?itemName=yaswanth1729.promethea" target="_blank" rel="noopener noreferrer">VS Code Extension</a>
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
    </footer>
  );
};

export default Footer;
