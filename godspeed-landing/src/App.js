import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Product from './components/Product';
import NavigationBar from './components/NavigationBar';
import Team from './components/Team';
import About from './components/About';
import Pricing from './components/Pricing';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './custom.css';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="app bg-dark text-light">
      <NavigationBar />
      <Hero />
      <About />
      <Product />
      <Team />
      <Pricing />
      <Footer/>
    </div>
  );
}

export default App;