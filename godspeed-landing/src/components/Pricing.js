import React from 'react';
import { Container, Card, Button, Row, Col, Badge } from 'react-bootstrap';

const plans = [
  {
    title: 'Community',
    price: 'Free',
    features: [
      'Built-in CLI',
      'Event-driven architecture',
      'Workflow engine',
      'RESTful APIs support',
      'Automated OpenAPI docs',
      'Community support'
    ],
    badgeText: '',
    badgeVariant: ''
  },
  {
    title: 'Professional',
    price: '$49/mo',
    features: [
      'All Community features',
      'Advanced plugins',
      'Message queue integrations',
      'Database connectors',
      'Priority support',
      'Unlimited projects'
    ],
    badgeText: 'POPULAR',
    badgeVariant: 'primary',
    isFeatured: true
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    features: [
      'All Professional features',
      'Custom integrations',
      'SLA guarantees',
      'Dedicated support',
      'On-premise deployment',
      'Custom training & workshops'
    ],
    badgeText: '',
    badgeVariant: ''
  }
];

const Pricing = ({ id }) => (
  <section id={id} className="py-5" data-aos="fade-up">
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-3 text-light display-5 lh-1">Choose Your <span className="text-primary">Plan</span></h2>
      <p className="text-center text-light-emphasis mb-5 mx-auto" style={{ maxWidth: '700px' }}>
        Get started with Godspeed today and revolutionize how you build event-driven services and APIs
      </p>
      
      <Row className="g-4 justify-content-center">
        {plans.map((plan, i) => (
          <Col lg={4} md={6} key={i}>
            <Card className={`text-center border-0 ${plan.isFeatured ? 'bg-dark-subtle' : 'bg-dark'} rounded-4 mb-4 h-100 shadow-lg position-relative pricing-card`}>
              {plan.badgeText && (
                <Badge bg={plan.badgeVariant} className="position-absolute top-0 start-50 translate-middle px-3 py-2 rounded-pill" style={{ marginTop: "-12px" }}>
                  {plan.badgeText}
                </Badge>
              )}
              
              <Card.Body className="d-flex flex-column p-4 p-lg-5">
                <Card.Title className="fw-bold fs-4 text-light mb-2">{plan.title}</Card.Title>
                <Card.Subtitle className="text-primary mb-2 fw-semibold fs-1">{plan.price}</Card.Subtitle>
                <p className="text-light-emphasis mb-4 small">
                  {plan.title === 'Enterprise' ? 'Contact for pricing' : plan.title === 'Community' ? 'Forever free' : 'Per developer / month'}
                </p>
                
                <ul className="list-unstyled text-light-emphasis mb-4 flex-grow-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="py-2 d-flex align-items-center">
                      <span className="text-primary me-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.title === 'Professional' ? 'primary' : 'outline-primary'} 
                  className="rounded-pill px-4 py-2 fw-medium"
                >
                  {plan.title === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <div className="text-center mt-5 pt-3">
        <p className="text-light-emphasis mb-0">
          Need a custom solution? <a href="#contact" className="text-primary text-decoration-none">Contact us</a> for personalized assistance.
        </p>
      </div>
    </Container>
  </section>
);

export default Pricing;