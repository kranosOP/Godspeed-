import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Zap, Clock, Package, Code, GitBranch, Cloud, Shield, Puzzle } from 'lucide-react';

const About = () => {
  const cardStyle = {
    background: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '16px',
    border: '1px solid rgba(99, 102, 106, 0.1)',
    backdropFilter: 'blur(8px)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
    }
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
    {
      icon: <GitBranch size={30} color="#3b82f6" />,
      title: "Version Control",
      description: "Built-in versioning for APIs and workflows, making it easy to evolve your services without breaking changes."
    },
    {
      icon: <Cloud size={30} color="#3b82f6" />,
      title: "Cloud Native",
      description: "Designed for modern cloud environments with containerization, serverless, and microservices in mind."
    },
    {
      icon: <Shield size={30} color="#3b82f6" />,
      title: "Security First",
      description: "Built-in security features including auth, rate limiting, and data validation to keep your services protected."
    },
    {
      icon: <Puzzle size={30} color="#3b82f6" />,
      title: "Extensible",
      description: "Powerful plugin system that lets you add functionality without modifying core code."
    },
  ];

  const features = [
    "Event-Driven Architecture", 
    "Declarative Configuration", 
    "Clean Code Structure",
    "Typescript Support", 
    "API-First Development",
    "Auto-Generated Documentation",
    "Hot Reloading",
    "Workflow Orchestration"
  ];

  // Timeline data
  const timeline = [
    {
      year: "2022",
      title: "Concept & Research",
      description: "Initial research on event-driven frameworks and clean architecture patterns"
    },
    {
      year: "2023",
      title: "Open Source Release",
      description: "First public release of Godspeed framework"
    },
    {
      year: "2024",
      title: "Enterprise Adoption",
      description: "Major companies begin adopting Godspeed for mission-critical applications"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Enhanced AI integration and cloud-native optimizations"
    }
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

        {/* Core tech stack badges */}
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <p className="text-light mb-3">Core Technologies</p>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {features.map((feature, idx) => (
                <Badge key={idx} bg="primary" className="fs-6 px-3 py-2 m-1">{feature}</Badge>
              ))}
            </div>
          </Col>
        </Row>

        {/* Benefits cards - now in 2 rows of 4 */}
        <Row>
          {benefits.map((benefit, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="h-100 p-4 text-center" style={cardStyle} 
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}>
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

        {/* Development Timeline */}
        <Row className="justify-content-center mt-5 mb-5">
          <Col lg={10}>
            <h3 className="text-light mb-4 text-center">The Godspeed Journey</h3>
            <div className="position-relative">
              {/* Timeline line */}
              <div className="position-absolute" style={{
                left: '50%', 
                top: 0, 
                bottom: 0, 
                width: '2px', 
                backgroundColor: '#3b82f6',
                transform: 'translateX(-50%)'
              }}></div>
              
              {/* Timeline events */}
              {timeline.map((event, index) => (
                <Row key={index} className={`mb-4 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <Col xs={6}></Col>
                  <Col xs={6} className="position-relative">
                    <div className="position-absolute" style={{
                      left: index % 2 === 0 ? 'auto' : '0', 
                      right: index % 2 === 0 ? '0' : 'auto',
                      top: '15px',
                      width: '15px',
                      height: '15px',
                      borderRadius: '50%',
                      backgroundColor: '#3b82f6',
                      transform: 'translateX(50%)',
                      marginLeft: index % 2 === 0 ? '0' : '-7.5px',
                      marginRight: index % 2 === 0 ? '-7.5px' : '0',
                    }}></div>
                    <div className={`p-3 ${index % 2 === 0 ? 'text-end pe-4' : 'ps-4'}`} style={{
                      ...cardStyle,
                      backgroundColor: 'rgba(59, 130, 246, 0.1)'
                    }}>
                      <h5 className="text-primary mb-1">{event.year}</h5>
                      <h6 className="text-light">{event.title}</h6>
                      <p className="text-light-emphasis small mb-0">{event.description}</p>
                    </div>
                  </Col>
                </Row>
              ))}
            </div>
          </Col>
        </Row>

        {/* Code example section */}
        <Row className="justify-content-center mt-5">
          <Col lg={10}>
            <Card className="p-4" style={{...cardStyle, backgroundColor: 'rgba(30, 41, 59, 0.8)'}}>
              <h4 className="text-light mb-3">Why Developers Choose Godspeed</h4>
              <Row>
                <Col md={6}>
                  <p className="text-light-emphasis">
                    <strong className="text-primary">Clean Architecture:</strong> Godspeed enforces separation of concerns,
                    making your codebase more maintainable and testable.
                  </p>
                  <p className="text-light-emphasis"> 
                    <strong className="text-primary">Event-Driven Design:</strong> Build reactive systems that respond to 
                    business events in real-time with minimal latency.
                  </p>
                  <p className="text-light-emphasis">
                    <strong className="text-primary">Developer Experience:</strong> Focus on business logic while Godspeed 
                    handles the boilerplate, infrastructure, and integration points.
                  </p>
                </Col>
                <Col md={6}>
                  <div className="bg-dark p-3 rounded" style={{border: '1px solid rgba(99, 102, 106, 0.3)'}}>
                    <pre className="text-light-emphasis mb-0" style={{fontSize: '0.8rem', overflow: 'auto'}}>
                      <code>
{`// Simple Godspeed service example
datasources:
  - name: userDB
    type: postgres

workflows:
  - name: createUser
    tasks:
      - id: validateInput
        type: function
      - id: checkDuplicate
        type: datasource
        source: userDB
      - id: saveUser
        type: datasource
        source: userDB
      - id: sendWelcomeEmail
        type: event
        event: user.created`}
                      </code>
                    </pre>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* Testimonial or social proof */}
        <Row className="justify-content-center mt-5">
          <Col lg={10}>
            <div className="p-4 text-center" style={{...cardStyle, backgroundColor: 'rgba(59, 130, 246, 0.1)'}}>
              <p className="fst-italic text-light-emphasis mb-3">
                "Godspeed has transformed how we build and scale our microservices. What used to take weeks 
                now takes days, with better quality and maintainability."
              </p>
              <p className="text-primary fw-bold mb-0">— Lead Architect at Enterprise Company</p>
            </div>
          </Col>
        </Row>

        {/* Community stats */}
        <Row className="justify-content-center text-center mt-5">
          <Col md={4} className="mb-4">
            <h2 className="text-primary display-4 fw-bold">500+</h2>
            <p className="text-light">GitHub Stars</p>
          </Col>
          <Col md={4} className="mb-4">
            <h2 className="text-primary display-4 fw-bold">100+</h2>
            <p className="text-light">Active Contributors</p>
          </Col>
          <Col md={4} className="mb-4">
            <h2 className="text-primary display-4 fw-bold">50+</h2>
            <p className="text-light">Production Deployments</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
