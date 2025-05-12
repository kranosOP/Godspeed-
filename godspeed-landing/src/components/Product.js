import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Optional - for animations

const features = [
  {
    title: 'Event-Driven Architecture',
    desc: 'Handle HTTP requests, schedule cron jobs, listen to message queues, and create custom event sources.',
    icon: '||',
    color: '#3b82f6', // Blue
    details: 'Build reactive systems that respond to business events in real-time with configurable event handlers and custom triggers.'
  },
  {
    title: 'Business Logic Engine',
    desc: 'Define workflows using YAML configs or write native JS/TS with a powerful and expressive syntax.',
    icon: '{ }',
    color: '#f59e0b', // Amber
    details: 'Create complex business workflows with conditional branching, parallel execution, error handling, and compensation logic.'
  },
  {
    title: 'Datasource Connectors',
    desc: 'Connect to databases, caches, APIs, and cloud services with configurable datasource plugins.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#3b82f6" viewBox="0 0 24 24"><path d="M19.3 8.12a.956.956 0 0 1-1-1.62l1-1a.956.956 0 0 1 1 1.62l-1 1Zm-2.6 9.76a.956.956 0 0 1-1-1.62l6-5a.956.956 0 0 1 1 1.62l-6 5Zm-11-5a.956.956 0 0 1-1-1.62l6-5a.956.956 0 0 1 1 1.62l-6 5Zm9-7.76a.956.956 0 0 1-1-1.62l1-1a.956.956 0 0 1 1 1.62l-1 1Z"/><path d="M12 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM4 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm16 6a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/></svg>,
    color: '#3b82f6', // Blue
    details: 'Simplified data access with automatic connection pooling, query building, and transaction management across multiple backends.'
  },
  {
    title: 'Plugin Ecosystem',
    desc: 'Extend functionality with official plugins or create custom ones for specific business needs.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#86efac" viewBox="0 0 24 24"><path d="M13 11a1 1 0 0 0-1 1v.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V12a1 1 0 0 0-2 0v.5a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5V12a1 1 0 0 0-1-1zm2-1a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1zm5 1a1 1 0 0 0-1 1v.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V12a1 1 0 0 0-2 0v.5a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5V12a1 1 0 0 0-1-1zm2 5.25a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75zM8 18a3 3 0 0 1-3 3H3a1 1 0 0 1-1-1v-2a3 3 0 0 1 3-3h2a1 1 0 0 1 1 1v2zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM22 3a1 1 0 0 1-1 1h-2a3 3 0 0 1-3 3v2a1 1 0 0 1-1 1h-2a3 3 0 0 1-3-3V5a1 1 0 0 1 1-1h2a3 3 0 0 1 3-3h2a1 1 0 0 1 1 1v1zm-6 0h1a1 1 0 1 0-1-1v1z"/></svg>,
    color: '#86efac', // Green
    details: 'Choose from auth, caching, rate-limiting, metrics, logging, and validation plugins, or build your own with a standardized interface.'
  },
  {
    title: 'API Documentation',
    desc: 'Auto-generate OpenAPI/Swagger docs from your service definitions for better developer experience.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#3b82f6" d="M10 8v8h4V8h-4m0-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m-2 14v2h8v-2h-8m14-4V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2v-2H4V4h16v12h-2m0 2v2h2a2 2 0 0 0 2-2h-4Z"/></svg>,
    color: '#3b82f6', // Blue
    details: 'Interactive API documentation with request/response examples, schema validation, and testing capabilities built right in.'
  },
  {
    title: 'Clean Architecture',
    desc: 'Separate concerns with distinct layers for configs, mapping, business logic, and infrastructure.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#c084fc" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>,
    color: '#c084fc', // Purple
    details: 'Maintain scalable codebases with separation of concerns that makes testing, debugging, and extending your applications easier.'
  },
  {
    title: 'Developer Experience',
    desc: 'Hot-reloading, type safety, and intuitive tooling reduce development time and improve code quality.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ef4444"><path d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12z"/></svg>,
    color: '#ef4444', // Red
    details: 'Boost productivity with CLI tools, scaffolding generators, comprehensive debugging, and built-in performance monitoring.'
  },
  {
    title: 'Runtime Flexibility',
    desc: 'Built for both Node.js and Bun runtime environments with optimized performance.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#8b5cf6"><path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2h9m3-4v-2H6v2h12z"/></svg>,
    color: '#8b5cf6', // Violet
    details: 'Leverage the speed of Bun or the maturity of Node.js with the same codebase, enabling smooth transitions as needs evolve.'
  }
];

const ProductFeatures = () => {
  const [activeCard, setActiveCard] = useState(null);

  // Card hover effects
  const cardVariants = {
    hover: {
      y: -8,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <section className="bg-dark text-light py-5" id="features">
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="text-center mb-3 fw-bold display-5" data-aos="fade-up">
              Power Your <span className="text-primary">Backend</span> with Godspeed
            </h2>
            <p className="text-light-emphasis mb-5" data-aos="fade-up" data-aos-delay="100">
              A comprehensive framework designed to accelerate development while maintaining clean architecture
            </p>
          </div>
        </div>
        
        <div className="row g-4 justify-content-center">
          {features.map((feature, index) => (
            <div 
              className="col-md-6 col-lg-4 mb-4" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <motion.div 
                className="bg-light bg-opacity-10 rounded-4 h-100 border border-1 position-relative"
                style={{ 
                  borderColor: 'rgba(255,255,255,0.05)',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                whileHover="hover"
                variants={cardVariants}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Feature header */}
                <div className="text-center pt-4 pb-3 px-3">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center mb-3 rounded-circle"
                    style={{
                      width: '70px', 
                      height: '70px', 
                      backgroundColor: `${feature.color}20`,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {typeof feature.icon === 'string' ? (
                      <span className="fw-bold fs-1" style={{ color: feature.color }}>{feature.icon}</span>
                    ) : (
                      feature.icon
                    )}
                  </div>
                  <h3 className="h5 text-center fw-semibold text-light mb-2">{feature.title}</h3>
                </div>
                
                {/* Feature content */}
                <div className="px-4 pb-4">
                  <p className="text-light-emphasis mb-3" style={{ fontSize: '0.95rem' }}>
                    {feature.desc}
                  </p>
                  
                  {/* Expandable details */}
                  <div 
                    className="details-container"
                    style={{
                      height: activeCard === index ? 'auto' : '0',
                      opacity: activeCard === index ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    <div className="border-top border-light border-opacity-10 pt-3 mt-2">
                      <p className="text-light-emphasis small mb-0">
                        {feature.details}
                      </p>
                    </div>
                  </div>
                  
                  {/* Learn more indicator */}
                  <div className="text-center mt-2">
                    <small className="text-primary">
                      {activeCard === index ? '↑ Less Details' : '↓ More Details'}
                    </small>
                  </div>
                </div>
                
                {/* Accent border at the bottom */}
                <div 
                  className="position-absolute bottom-0 start-0 w-100" 
                  style={{ 
                    height: '3px', 
                    backgroundColor: feature.color,
                    opacity: activeCard === index ? 1 : 0.5,
                    transition: 'opacity 0.3s ease'
                  }}
                />
              </motion.div>
            </div>
          ))}
        </div>
        
        {/* Code example section */}
        <div className="row justify-content-center mt-5" data-aos="fade-up">
          <div className="col-lg-10">
            <div className="bg-light bg-opacity-5 rounded-4 p-4 border border-1" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              <div className="mb-3">
                <span className="badge bg-primary mb-2">Example Configuration</span>
                <h4 className="text-light mb-3">Simple API with Database Connection</h4>
              </div>
              <div className="bg-dark p-3 rounded" style={{ border: '1px solid rgba(99, 102, 106, 0.3)' }}>
                <pre className="text-light-emphasis mb-0" style={{ fontSize: '0.8rem', overflow: 'auto' }}>
                  <code>
{`# Godspeed service configuration
service:
  name: user-service
  version: 1.0.0

datasources:
  - name: userDB
    type: postgres
    config:
      connection_string: "{{secrets.DB_URL}}"

http:
  port: 8080
  routes:
    - path: /users
      method: GET
      workflow: listUsers
    - path: /users
      method: POST
      workflow: createUser

workflows:
  createUser:
    tasks:
      - id: validateInput
        type: function
        handler: modules/users/validate.js
      - id: saveToDb
        type: datasource
        source: userDB
        operation: insert
        input:
          table: users
          data: "{{$workflow.input}}"
      - id: publishEvent
        type: event
        event: user.created
        payload: "{{$task.saveToDb.result}}"
`}
                  </code>
                </pre>
              </div>
              <div className="text-end mt-2">
                <a href="https://godspeed.systems/docs/" className="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer">
                  View Documentation →
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="row justify-content-center text-center mt-5" data-aos="fade-up">
          <div className="col-lg-8">
            <div className="p-4 rounded-4 bg-primary bg-opacity-10 border border-primary border-opacity-25">
              <h4 className="text-primary mb-3">Ready to accelerate your development?</h4>
              <p className="text-light-emphasis mb-4">
                Start building with Godspeed today and experience the difference in developer productivity.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="https://github.com/godspeedsystems/gs-node-service" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
                <a href="https://studio.godspeed.systems/" className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">
                  Try Godspeed Studio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
