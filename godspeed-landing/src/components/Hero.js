import { Container, Button, Row, Col } from 'react-bootstrap';

const Hero = () => (
  <div className="bg-dark text-light py-5 border-bottom border-dark">
    <Container className="py-5">
      <Row className="align-items-center">
        <Col lg={7} className="mb-5 mb-lg-0 pe-lg-5">
          <div className="text-center text-lg-start" data-aos="fade-up">
            <h6 className="text-primary fw-bold mb-3">
              <span className="me-2">——</span>
              ACCELERATE DEVELOPMENT
              <span className="ms-2">——</span>
            </h6>
            
            <h1 className="display-2 fw-bold mb-4">
              Build Cloud-Native<br />
              Workflows Faster
            </h1>
            
            <p className="lead mb-4 text-light-emphasis">
              Godspeed is a powerful meta-framework that simplifies building event-driven 
              APIs and services using Node.js and Bun.js. Reduce development time by up 
              to 70% with our intuitive tools.
            </p>
            
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <Button variant="primary" size="lg" className="px-4 py-2 fw-semibold">
                Get Started
              </Button>
              <Button variant="outline-light" size="lg" className="px-4 py-2">
                View Docs
              </Button>
            </div>
            
            <div className="mt-4 text-light-emphasis">
              <small>
                Used by developers at <span className="fw-bold text-light">Microsoft</span>, {" "}
                <span className="fw-bold text-light">Amazon</span>, {" "}
                <span className="fw-bold text-light">Uber</span> and more
              </small>
            </div>
          </div>
        </Col>
        
        <Col lg={5}>
          <div className="position-relative mt-4 mt-lg-0" data-aos="fade-left">
            {/* Code snippet card */}
            <div className="bg-dark shadow border border-secondary rounded-3 mx-auto" style={{ maxWidth: '450px' }}>
              <div className="d-flex justify-content-between align-items-center p-3 border-bottom border-secondary">
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightning-charge-fill me-2" viewBox="0 0 16 16">
                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                  </svg>
                  <span className="fw-semibold">Event-Driven API</span>
                </div>
                <span className="badge bg-primary rounded-pill d-flex align-items-center">
                  10x Faster Development
                </span>
              </div>
              <div className="p-3 bg-black bg-opacity-50">
                <pre className="mb-0" style={{ overflowX: 'auto' }}>
                  <code>
                    <span className="text-primary">const</span> <span className="text-light">api</span> <span className="text-light-emphasis">=</span> <span className="text-success">godspeed</span><span className="text-light-emphasis">.</span><span className="text-warning">create</span><span className="text-light-emphasis">();</span>
                    {"\n"}
                    <span className="text-light">api</span><span className="text-light-emphasis">.</span><span className="text-warning">on</span><span className="text-light-emphasis">(</span><span className="text-danger">'order.created'</span><span className="text-light-emphasis">,</span> <span className="text-primary">()</span> <span className="text-light-emphasis">=&gt;</span> <span className="text-light-emphasis">{"{"}</span>
                    {"\n"}
                    <span className="text-success">{"  // Handle event"}</span>
                    {"\n"}
                    <span className="text-light-emphasis">{"});"}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      
      {/* Feature highlights */}
      <Row className="mt-5 pt-4 border-top border-secondary">
        <Col xs={12}>
          <div className="d-flex flex-wrap justify-content-between">
            <div className="text-center px-3 mb-3 mb-md-0" data-aos="fade-up" data-aos-delay="100">
              <div className="text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                </svg>
              </div>
              <div className="text-light">Faster Development</div>
            </div>
            <div className="text-center px-3 mb-3 mb-md-0" data-aos="fade-up" data-aos-delay="200">
              <div className="text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cloud-fill" viewBox="0 0 16 16">
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                </svg>
              </div>
              <div className="text-light">Cloud Native</div>
            </div>
            <div className="text-center px-3 mb-3 mb-md-0" data-aos="fade-up" data-aos-delay="300">
              <div className="text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-hdd-network-fill" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5.5v3A1.5 1.5 0 0 0 6 11.5H.5a.5.5 0 0 0 0 1H6A1.5 1.5 0 0 0 7.5 14h1a1.5 1.5 0 0 0 1.5-1.5h5.5a.5.5 0 0 0 0-1H10A1.5 1.5 0 0 0 8.5 10V7H14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"/>
                </svg>
              </div>
              <div className="text-light">Microservices Ready</div>
            </div>
            <div className="text-center px-3" data-aos="fade-up" data-aos-delay="400">
              <div className="text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-shield-check" viewBox="0 0 16 16">
                  <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                  <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                </svg>
              </div>
              <div className="text-light">Enterprise Grade</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Hero;
