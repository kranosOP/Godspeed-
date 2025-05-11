// About.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Zap, Clock, Package, Code } from 'lucide-react';

const About = () => {
  const cardStyle = {
    background: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '16px',
    border: '1px solid rgba(99, 102, 106, 0.1)',
    backdropFilter: 'blur(8px)',
    transition: 'all 0.3s ease'
  };

  const benefits = [
    {
      icon: <Zap size={30} color="#3b82f6" />,
      title: "High-Performance",
      description: "Built for both Node.js and Bun runtime environments, delivering optimized performance for business applications."
    },
    {
      icon: <Clock size={30} color="#3b82f6" />,
      title: "Rapid Development",
      description: "Accelerate development with event-based architecture, declarative configs, and reusable components."
    },
    {
      icon: <Package size={30} color="#3b82f6" />,
      title: "Framework Agnostic",
      description: "Freely integrate with your favorite frameworks and libraries while maintaining a clean architecture."
    },
    {
      icon: <Code size={30} color="#3b82f6" />,
      title: "Developer Experience",
      description: "Focus on business logic with auto-generated OpenAPI docs, plugin system, and hot-reloading."
    },
  ];

  return (
    <section className="py-5 bg-dark" id="about">
      <Container className="py-5" data-aos="fade-up">
        <h2 className="text-center fw-bold mb-4 text-light display-5 lh-1">
          About <span className="text-primary">Godspeed</span>
        </h2>
        
        <Row className="justify-content-center mb-5">
          <Col lg={9}>
            <p className="text-center text-light-emphasis mb-4 fs-5">
              Godspeed is an open-source meta-framework that empowers developers to build event-driven,
              workflow-oriented services with clean architecture patterns and minimal boilerplate.
            </p>
            <p className="text-center text-light-emphasis">
              Built for both Node.js and Bun runtime environments, Godspeed separates business logic from 
              infrastructure concerns, enabling teams to focus on creating value rather than managing complexity.
            </p>
          </Col>
        </Row>

        <Row>
          {benefits.map((benefit, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="h-100 p-4 text-center" style={cardStyle}>
                <div className="d-flex justify-content-center mb-3">
                  {benefit.icon}
                </div>
                <Card.Title className="text-light fw-semibold mb-3">
                  {benefit.title}
                </Card.Title>
                <Card.Text className="text-light-emphasis small">
                  {benefit.description}
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={10}>
            <div className="p-4" style={{...cardStyle, backgroundColor: 'rgba(59, 130, 246, 0.1)'}}>
              <p className="text-center text-light-emphasis mb-0">
                <strong className="text-primary">Why Godspeed?</strong> Godspeed combines the best practices of modern application development - 
                event-driven architecture, separation of concerns, strong typing, and developer experience - 
                into a cohesive framework that scales with your business needs. Whether you're building microservices, 
                APIs, or event processors, Godspeed provides the structure and flexibility you need.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;