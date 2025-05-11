import { Container, Button } from 'react-bootstrap';

const Hero = () => (
  <div className="bg-dark text-light py-5 border-bottom border-dark">
    <Container className="text-center py-5" data-aos="fade-up">
      <h6 className="text-primary mb-3">—— Tailored Workflows ——</h6>
      <h1 className="display-2 fw-bold mb-4">Build Cloud-Native Workflows Faster</h1>
      <p className="lead mb-5 text-light-emphasis w-75 mx-auto">
        Godspeed is a modern meta-framework for event-driven APIs and services using Node.js and Bun.js.
      </p>
      <Button variant="outline-primary" size="lg" className="px-4 py-2 rounded-pill">
        Get Started
      </Button>
    </Container>
  </div>
);

export default Hero;