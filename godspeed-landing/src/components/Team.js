
import { Container, Row, Col, Card } from 'react-bootstrap';
import imgi from '../assets/imgi.jpg';
const teamMembers = [
  { 
    name: 'Abhishek Anand', 
    role: 'Founder & Core Contributor', 
    img: imgi 
  },
  { 
    name: 'Arpit Agarwal', 
    role: 'Core Contributor', 
    img: imgi 
  },
  { 
    name: 'Saurabh Singh', 
    role: 'Core Contributor', 
    img: imgi 
  }
];

const Team = () => (
  <Container className="py-5" data-aos="fade-up">
    <div className="text-center mb-2">
    </div>
    <h2 className="text-center fw-bold mb-5 text-light display-5 lh-1">Meet the <span className="text-primary">Experts</span></h2>
    <Row className="g-4">
      {teamMembers.map((member, i) => (
        <Col md={4} key={i}>
          <Card className="text-center border-0 bg-dark rounded-4 mb-4 shadow-subtle team-card">
            <div className="position-relative">
              <Card.Img variant="top" src={member.img} className="rounded-circle p-3 mx-auto" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
              <div className="team-img-glow"></div>
            </div>
            <Card.Body className="pb-4">
              <Card.Title className="fw-semibold text-light mb-1">{member.name}</Card.Title>
              <Card.Text className="text-primary fw-light ls-wide">{member.role}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Team;