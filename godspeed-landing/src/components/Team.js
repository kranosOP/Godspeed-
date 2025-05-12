import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Github, Linkedin, Twitter, Globe, Mail } from 'lucide-react';
import imgi from '../assets/imgi.jpg';

// Enhanced team members data with bios and social links
const teamMembers = [
  {
    name: 'Abhishek Anand',
    role: 'Founder & Core Contributor',
    img: imgi,
    bio: 'Architect and visionary behind Godspeed. Passionate about developer experience and building scalable event-driven systems.',
    expertise: ['System Architecture', 'Event-Driven Design', 'Backend Development'],
    social: {
      github: 'https://github.com/username',
      linkedin: 'https://linkedin.com/in/username',
      twitter: 'https://twitter.com/username',
      website: 'https://personal-website.com'
    }
  },
  {
    name: 'Arpit Agarwal',
    role: 'Core Contributor',
    img: imgi,
    bio: 'Backend specialist focused on performance optimizations and database integrations. Advocates for clean architecture principles.',
    expertise: ['Database Systems', 'API Design', 'Performance Optimization'],
    social: {
      github: 'https://github.com/username',
      linkedin: 'https://linkedin.com/in/username',
      twitter: 'https://twitter.com/username'
    }
  },
  {
    name: 'Saurabh Singh',
    role: 'Core Contributor',
    img: imgi,
    bio: 'DevOps expert bringing CI/CD expertise and cloud-native solutions to Godspeed. Passionate about developer tooling.',
    expertise: ['DevOps', 'Cloud Infrastructure', 'Developer Tooling'],
    social: {
      github: 'https://github.com/username',
      linkedin: 'https://linkedin.com/in/username',
      mail: 'mailto:email@example.com'
    }
  }
];

const Team = () => {
  const [activeCard, setActiveCard] = useState(null);
  
  return (
    <section className="bg-dark py-5" id="team">
      <Container className="py-5" data-aos="fade-up">
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="text-center fw-bold mb-3 text-light display-5 lh-1">
              Meet the <span className="text-primary">Experts</span>
            </h2>
            <p className="text-light-emphasis mb-5">
              The talented individuals behind Godspeed bringing years of experience in building scalable, 
              event-driven systems and developer-focused tools.
            </p>
          </Col>
        </Row>
        
        <Row className="g-4 justify-content-center">
          {teamMembers.map((member, i) => (
            <Col md={6} lg={4} key={i}>
              <Card 
                className="text-center border-0 rounded-4 mb-4 team-card h-100"
                style={{
                  background: 'rgba(30, 41, 59, 0.5)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(99, 102, 106, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Image with glow effect */}
                <div className="position-relative mt-4">
                  <div 
                    className="rounded-circle mx-auto overflow-hidden"
                    style={{
                      width: '150px', 
                      height: '150px',
                      border: '3px solid rgba(59, 130, 246, 0.3)',
                      boxShadow: activeCard === i ? '0 0 25px rgba(59, 130, 246, 0.4)' : '0 0 15px rgba(59, 130, 246, 0.2)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Card.Img 
                      src={member.img} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transform: activeCard === i ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.5s ease'
                      }} 
                    />
                  </div>
                </div>
                
                {/* Member information */}
                <Card.Body className="pb-4">
                  <Card.Title className="fw-semibold text-light mb-1 mt-3">{member.name}</Card.Title>
                  <div className="text-primary fw-light mb-3" style={{ letterSpacing: '0.5px' }}>{member.role}</div>
                  
                  {/* Bio section */}
                  <Card.Text className="text-light-emphasis small mb-3">
                    {member.bio}
                  </Card.Text>
                  
                  {/* Expertise badges */}
                  <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                    {member.expertise.map((skill, index) => (
                      <span 
                        key={index} 
                        className="badge"
                        style={{
                          backgroundColor: 'rgba(59, 130, 246, 0.15)',
                          color: '#90b5f5',
                          padding: '0.35rem 0.75rem',
                          fontSize: '0.7rem',
                          borderRadius: '100px'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Social links */}
                  <div className="d-flex justify-content-center gap-3 mt-3">
                    {member.social.github && (
                      <a 
                        href={member.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                        style={{
                          color: activeCard === i ? '#3b82f6' : '#90b5f5',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                        style={{
                          color: activeCard === i ? '#3b82f6' : '#90b5f5',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a 
                        href={member.social.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                        style={{
                          color: activeCard === i ? '#3b82f6' : '#90b5f5',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.social.website && (
                      <a 
                        href={member.social.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                        style={{
                          color: activeCard === i ? '#3b82f6' : '#90b5f5',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Globe size={18} />
                      </a>
                    )}
                    {member.social.mail && (
                      <a 
                        href={member.social.mail} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-icon"
                        style={{
                          color: activeCard === i ? '#3b82f6' : '#90b5f5',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        {/* Community section */}
        <Row className="justify-content-center mt-5">
          <Col lg={10}>
            <div 
              className="p-4 rounded-4 border-1 text-center"
              style={{
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}
            >
              <h4 className="text-light mb-3">Join Our Community</h4>
              <p className="text-light-emphasis mb-4">
                Godspeed is an open-source project with a growing community of contributors. 
                We welcome developers of all skill levels to join us in building the future of backend development.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a 
                  href="https://github.com/godspeedsystems" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary d-flex align-items-center gap-2"
                >
                  <Github size={18} /> GitHub
                </a>
                <a 
                  href="https://discord.gg/godspeed" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary d-flex align-items-center gap-2"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    fill="currentColor" 
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                  </svg> Join Discord
                </a>
                <a 
                  href="https://twitter.com/godspeedsystems" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-light d-flex align-items-center gap-2"
                >
                  <Twitter size={18} /> Follow Updates
                </a>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* GitHub contributors */}
        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <h5 className="text-light mb-4">Contributors</h5>
            <p className="text-light-emphasis small mb-3">
              Special thanks to all our contributors who have helped make Godspeed better!
            </p>
            <div className="contributor-avatars d-flex flex-wrap justify-content-center gap-2 mb-3">
              {/* This would ideally be populated from GitHub API, but showing placeholder for now */}
              {Array(12).fill().map((_, i) => (
                <div 
                  key={i} 
                  className="rounded-circle overflow-hidden"
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '2px solid rgba(30, 41, 59, 0.8)',
                    marginLeft: i > 0 ? '-10px' : '0'
                  }}
                >
                  <img 
                    src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                    alt="Contributor" 
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                  />
                </div>
              ))}
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(59, 130, 246, 0.2)',
                  border: '2px solid rgba(30, 41, 59, 0.8)',
                  color: '#3b82f6',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  marginLeft: '-10px'
                }}
              >
                +42
              </div>
            </div>
            <a 
              href="https://github.com/godspeedsystems/godspeed/graphs/contributors" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-light mt-2"
            >
              View All Contributors
            </a>
          </Col>
        </Row>
      </Container>
      
      {/* Add CSS for hover effects - alternatively you can put this in your CSS file */}
      <style jsx>{`
        .team-card:hover {
          transform: translateY(-5px);
        }
        .social-icon:hover {
          transform: translateY(-3px);
          color: #3b82f6 !important;
        }
      `}</style>
    </section>
  );
};

export default Team;
