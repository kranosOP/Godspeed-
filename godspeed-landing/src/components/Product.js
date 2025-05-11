import React from 'react';

const features = [
  {
    title: 'Event-Driven Architecture',
    desc: 'Handle HTTP requests, schedule cron jobs, listen to message queues, and create custom event sources.',
    icon: '||'
  },
  {
    title: 'Business Logic Engine',
    desc: 'Define workflows using YAML configs or write native JS/TS with a powerful and expressive syntax.',
    icon: '{ }'
  },
  {
    title: 'Datasource Connectors',
    desc: 'Connect to databases, caches, APIs, and cloud services with configurable datasource plugins.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#3b82f6" viewBox="0 0 24 24"><path d="M19.3 8.12a.956.956 0 0 1-1-1.62l1-1a.956.956 0 0 1 1 1.62l-1 1Zm-2.6 9.76a.956.956 0 0 1-1-1.62l6-5a.956.956 0 0 1 1 1.62l-6 5Zm-11-5a.956.956 0 0 1-1-1.62l6-5a.956.956 0 0 1 1 1.62l-6 5Zm9-7.76a.956.956 0 0 1-1-1.62l1-1a.956.956 0 0 1 1 1.62l-1 1Z"/><path d="M12 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM4 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm16 6a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/></svg>
  },
  {
    title: 'Plugin Ecosystem',
    desc: 'Extend functionality with official plugins or create custom ones for specific business needs.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#86efac" viewBox="0 0 24 24"><path d="M13 11a1 1 0 0 0-1 1v.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V12a1 1 0 0 0-2 0v.5a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5V12a1 1 0 0 0-1-1zm2-1a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1zm5 1a1 1 0 0 0-1 1v.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V12a1 1 0 0 0-2 0v.5a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5V12a1 1 0 0 0-1-1zm2 5.25a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75zM8 18a3 3 0 0 1-3 3H3a1 1 0 0 1-1-1v-2a3 3 0 0 1 3-3h2a1 1 0 0 1 1 1v2zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM22 3a1 1 0 0 1-1 1h-2a3 3 0 0 1-3 3v2a1 1 0 0 1-1 1h-2a3 3 0 0 1-3-3V5a1 1 0 0 1 1-1h2a3 3 0 0 1 3-3h2a1 1 0 0 1 1 1v1zm-6 0h1a1 1 0 1 0-1-1v1z"/></svg>
  },
  {
    title: 'API Documentation',
    desc: 'Auto-generate OpenAPI/Swagger docs from your service definitions for better developer experience.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#3b82f6" d="M10 8v8h4V8h-4m0-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m-2 14v2h8v-2h-8m14-4V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2v-2H4V4h16v12h-2m0 2v2h2a2 2 0 0 0 2-2h-4Z"/></svg>
  },
  {
    title: 'Clean Architecture',
    desc: 'Separate concerns with distinct layers for configs, mapping, business logic, and infrastructure.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#c084fc" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
  },
];

const ProductFeatures = () => (
  <div className="bg-dark text-light py-5">
    <div className="container">
      <h2 className="text-center mb-5 fw-bold display-5">
        Product <span className="text-primary">Features</span>
      </h2>
      
      <div className="row g-4">
        {features.map((feature, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="bg-light bg-opacity-10 rounded-4 h-100" style={{ backgroundColor: '#dee2e6' }}>
              <div className="text-center pt-4 pb-2">
                <div className="d-inline-flex align-items-center justify-content-center mb-2" style={{width: '60px', height: '60px'}}>
                  {typeof feature.icon === 'string' ? (
                    <span className="text-primary fw-bold fs-1">{feature.icon}</span>
                  ) : (
                    feature.icon
                  )}
                </div>
                <h3 className="h5 text-center mb-3 fw-semibold text-light">{feature.title}</h3>
              </div>
              <p className="text-center px-4 pb-4 mb-0 text-light-emphasis" style={{ fontSize: '0.95rem' }}>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProductFeatures;
