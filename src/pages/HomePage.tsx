import type React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
