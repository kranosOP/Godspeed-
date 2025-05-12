import React, { useState } from 'react';
import { Container, Card, Button, Row, Col, Badge, Form } from 'react-bootstrap';
import { Check, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

// Enhanced plans with more detailed features and categorization
const plans = [
  {
    title: 'Community',
    price: 'Free',
    description: 'Perfect for individual developers and open-source projects',
    monthlyPrice: '$0',
    annualPrice: '$0',
    ctaText: 'Get Started',
    ctaLink: 'https://github.com/godspeedsystems/godspeed',
    features: [
      {
        category: 'Core Features',
        items: [
          { name: 'Event-driven architecture', included: true },
          { name: 'RESTful APIs support', included: true },
          { name: 'GraphQL support', included: true },
          { name: 'Built-in CLI tools', included: true },
          { name: 'Workflow engine', included: true },
          { name: 'Automated OpenAPI docs', included: true }
        ]
      },
      {
        category: 'Deployment & Infrastructure',
        items: [
          { name: 'Local development environment', included: true },
          { name: 'Docker support', included: true },
          { name: 'Kubernetes deployment', included: false },
          { name: 'Auto-scaling', included: false }
        ]
      },
      {
        category: 'Support',
        items: [
          { name: 'Community forums', included: true },
          { name: 'GitHub issues', included: true },
          { name: 'Email support', included: false },
          { name: 'SLA guarantees', included: false }
        ]
      }
    ],
    badgeText: '',
    badgeVariant: ''
  },
  {
    title: 'Professional',
    price: '$49',
    description: 'Designed for teams and professional projects with advanced needs',
    monthlyPrice: '$49',
    annualPrice: '$490',  // 10 months pricing with 2 months free
    ctaText: 'Start Free Trial',
    ctaLink: 'https://godspeed.systems/signup',
    features: [
      {
        category: 'Core Features',
        items: [
          { name: 'Everything in Community', included: true },
          { name: 'Advanced plugins ecosystem', included: true },
          { name: 'Custom event handlers', included: true },
          { name: 'Enterprise integrations', included: true },
          { name: 'Role-based access control', included: true },
          { name: 'Audit logging', included: true }
        ]
      },
      {
        category: 'Deployment & Infrastructure',
        items: [
          { name: 'Cloud deployment templates', included: true },
          { name: 'CI/CD pipeline integration', included: true },
          { name: 'Multi-environment support', included: true },
          { name: 'High availability setup', included: true }
        ]
      },
      {
        category: 'Support',
        items: [
          { name: 'Priority email support', included: true },
          { name: 'Community forums', included: true },
          { name: 'Private Slack channel', included: true },
          { name: 'Training webinars', included: true }
        ]
      }
    ],
    badgeText: 'POPULAR',
    badgeVariant: 'primary',
    isFeatured: true
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations with specialized requirements',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    ctaText: 'Contact Sales',
    ctaLink: 'https://godspeed.systems/contact',
    features: [
      {
        category: 'Core Features',
        items: [
          { name: 'Everything in Professional', included: true },
          { name: 'Custom integrations', included: true },
          { name: 'White-labeling options', included: true },
          { name: 'Advanced security features', included: true },
          { name: 'Compliance tools (GDPR, HIPAA)', included: true },
          { name: 'Custom feature development', included: true }
        ]
      },
      {
        category: 'Deployment & Infrastructure',
        items: [
          { name: 'On-premise deployment', included: true },
          { name: 'Private cloud options', included: true },
          { name: 'Multi-region deployment', included: true },
          { name: 'Custom infrastructure setup', included: true }
        ]
      },
      {
        category: 'Support',
        items: [
          { name: 'Dedicated account manager', included: true },
          { name: '24/7 support', included: true },
          { name: 'SLA guarantees', included: true },
          { name: 'Custom training & workshops', included: true }
        ]
      }
    ],
    badgeText: 'ENTERPRISE',
    badgeVariant: 'warning',
  }
];

// FAQ items for pricing
const faqItems = [
  {
    question: "How does the pricing work for teams?",
    answer: "Our Professional plan is priced per developer. For example, if you have 5 developers using Godspeed, the monthly cost would be $49 × 5 = $245. Enterprise plans offer custom pricing based on your organization's specific needs and scale."
  },
  {
    question: "Is there a trial period available?",
    answer: "Yes! We offer a 14-day free trial of our Professional plan with no credit card required. This gives you full access to all Professional features to evaluate if it's the right fit for your team."
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer: "Absolutely. You can upgrade at any time, and the new features will be available immediately. Downgrading is also possible at the end of your billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and for Enterprise customers, we can also support purchase orders and invoicing."
  },
  {
    question: "Is there a difference between self-hosted and cloud deployments?",
    answer: "The Community edition is designed for self-hosting. Professional plans include both self-hosted and cloud deployment options, while Enterprise offers additional private cloud and on-premise solutions with enhanced security features."
  }
];

const Pricing = ({ id }) => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Toggle category expansion
  const toggleCategory = (planIndex, categoryIndex) => {
    const key = `${planIndex}-${categoryIndex}`;
    setExpandedCategories({
      ...expandedCategories,
      [key]: !expandedCategories[key]
    });
  };

  // Toggle FAQ item
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section id={id} className="py-5 bg-gray-900" data-aos="fade-up">
      <Container className="py-5">
        <div className="text-center mb-5">
          <Badge bg="primary" className="text-uppercase mb-3 px-3 py-2">Pricing</Badge>
          <h2 className="text-center fw-bold mb-3 text-light display-5 lh-1">
            Choose Your <span className="text-primary">Plan</span>
          </h2>
          <p className="text-center text-light-emphasis mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            Select the perfect Godspeed plan to accelerate your development and transform how you build event-driven applications
          </p>
          
          {/* Billing toggle */}
          <div className="d-flex align-items-center justify-content-center mb-5">
            <span className={`me-3 ${billingPeriod === 'monthly' ? 'text-light' : 'text-light-emphasis'}`}>
              Monthly
            </span>
            <Form.Check 
              type="switch"
              id="billing-switch"
              checked={billingPeriod === 'annual'}
              onChange={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
              className="mx-2 pricing-toggle"
            />
            <span className={`ms-3 ${billingPeriod === 'annual' ? 'text-light' : 'text-light-emphasis'}`}>
              Annual
            </span>
            <Badge bg="success" className="ms-3 px-2 py-1">Save 16%</Badge>
          </div>
        </div>
        
        <Row className="g-4 justify-content-center">
          {plans.map((plan, i) => (
            <Col lg={4} md={6} key={i}>
              <Card 
                className={`border-0 ${plan.isFeatured ? 'bg-dark-subtle bg-opacity-25' : 'bg-dark'} rounded-4 h-100 shadow-lg position-relative pricing-card`}
                style={{
                  transform: plan.isFeatured ? 'scale(1.05)' : 'scale(1)',
                  zIndex: plan.isFeatured ? 1 : 0,
                  border: plan.isFeatured ? '1px solid rgba(59, 130, 246, 0.3)' : '',
                  boxShadow: plan.isFeatured ? '0 0 25px rgba(59, 130, 246, 0.2)' : ''
                }}
              >
                {plan.badgeText && (
                  <Badge 
                    bg={plan.badgeVariant} 
                    className="position-absolute top-0 start-50 translate-middle px-3 py-2 rounded-pill fw-bold text-uppercase"
                    style={{ marginTop: "-12px" }}
                  >
                    {plan.badgeText}
                  </Badge>
                )}
                
                <Card.Body className="d-flex flex-column p-4 p-lg-5">
                  <div className="text-center mb-4">
                    <Card.Title className="fw-bold fs-4 text-light mb-2">{plan.title}</Card.Title>
                    <p className="text-light-emphasis mb-3 small">
                      {plan.description}
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <h3 className="text-primary mb-0 fw-bold display-5">
                        {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                      </h3>
                      {plan.title !== 'Enterprise' && (
                        <span className="text-light-emphasis ms-2">
                          {billingPeriod === 'monthly' ? '/month' : '/year'}
                        </span>
                      )}
                    </div>
                    {plan.title !== 'Enterprise' && (
                      <p className="text-light-emphasis small">
                        per developer {billingPeriod === 'annual' && '(2 months free)'}
                      </p>
                    )}
                  </div>
                  
                  <Button 
                    variant={plan.isFeatured ? 'primary' : 'outline-primary'} 
                    className="rounded-pill px-4 py-2 fw-medium mb-4 w-100"
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.ctaText}
                  </Button>
                  
                  {/* Feature list by category */}
                  <div className="mt-2 mb-3">
                    {plan.features.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="mb-3">
                        <div 
                          className="d-flex justify-content-between align-items-center cursor-pointer mb-2"
                          onClick={() => toggleCategory(i, categoryIndex)}
                          style={{ cursor: 'pointer' }}
                        >
                          <h6 className="text-light mb-0 fw-semibold">{category.category}</h6>
                          <span className="text-light-emphasis">
                            {expandedCategories[`${i}-${categoryIndex}`] ? '−' : '+'}
                          </span>
                        </div>
                        
                        {(expandedCategories[`${i}-${categoryIndex}`] || categoryIndex === 0) && (
                          <ul className="list-unstyled text-light-emphasis small ps-1">
                            {category.items.map((feature, idx) => (
                              <li key={idx} className="py-1 d-flex align-items-center">
                                {feature.included ? (
                                  <CheckCircle size={16} className="text-primary me-2" />
                                ) : (
                                  <HelpCircle size={16} className="text-muted me-2" style={{ opacity: 0.5 }} />
                                )}
                                <span className={feature.included ? '' : 'text-muted'} style={{ opacity: feature.included ? 1 : 0.5 }}>
                                  {feature.name}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        {/* Comparison CTA */}
        <div className="text-center mt-5 mb-5">
          <p className="text-light mb-3">Need to compare plans in more detail?</p>
          <Button variant="outline-light" className="rounded-pill" href="#feature-comparison">
            View Full Feature Comparison
          </Button>
        </div>
        
        {/* Testimonial */}
        <div 
          className="p-4 rounded-4 border-1 text-center my-5 mx-auto"
          style={{
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            maxWidth: '800px'
          }}
        >
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div 
              className="rounded-circle overflow-hidden mb-3 mb-md-0 me-md-4"
              style={{
                width: '80px',
                height: '80px',
                minWidth: '80px',
                border: '3px solid rgba(59, 130, 246, 0.3)'
              }}
            >
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Customer" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="text-start">
              <p className="text-light-emphasis mb-2 fst-italic">
                "Switching to Godspeed reduced our development time by 40% and allowed our team to focus on business logic instead of infrastructure. The event-driven architecture handled our scaling challenges beautifully."
              </p>
              <p className="text-primary mb-0 fw-semibold">Rajat Sharma</p>
              <p className="text-light-emphasis small">CTO at TechInnovate Solutions</p>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-5 pt-3">
          <h3 className="text-center text-light mb-4">Frequently Asked Questions</h3>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="faq-list">
                {faqItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="mb-3 p-3 rounded-3"
                    style={{
                      background: expandedFaq === index ? 'rgba(59, 130, 246, 0.1)' : 'rgba(30, 41, 59, 0.5)',
                      border: expandedFaq === index ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid rgba(99, 102, 106, 0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0 text-light fw-semibold">{item.question}</h6>
                      <span className="text-primary">{expandedFaq === index ? '−' : '+'}</span>
                    </div>
                    {expandedFaq === index && (
                      <p className="mt-3 mb-0 text-light-emphasis small">
                        {item.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
        
        {/* Contact CTA */}
        <div className="text-center mt-5 pt-3">
          <p className="text-light-emphasis mb-2">
            Need a custom solution for your specific requirements?
          </p>
          <h4 className="text-light mb-4">Let's discuss how Godspeed can help your business</h4>
          <Button 
            variant="primary" 
            size="lg"
            className="rounded-pill px-4 py-2"
            href="#contact"
          >
            Schedule a Consultation
          </Button>
        </div>
      </Container>
      
      {/* CSS for animations and effects */}
      <style jsx>{`
        .pricing-card {
          transition: all 0.3s ease;
        }
        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .pricing-toggle .form-check-input:checked {
          background-color: #3b82f6;
          border-color: #3b82f6;
        }
        .pricing-toggle .form-check-input {
          width: 48px;
          height: 24px;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
