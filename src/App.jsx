// App.jsx

import React, { useEffect, useState } from 'react';
import './App.css'; // Import your CSS styles
import Nav from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when loading is complete
    }, 3000); // Adjust the delay as per your requirement
  }, []);

  return (
    <div className="bg-gray-100 text-gray-700 font-body relative">
      {isLoading ? (
        <div className="loader">
          <span style={{ '--delay': 1 }} className="ball"></span>
          <span style={{ '--delay': 2 }} className="ball"></span>
          <span style={{ '--delay': 3 }} className="ball"></span>
          <span style={{ '--delay': 4 }} className="ball"></span>
          <span style={{ '--delay': 5 }} className="ball"></span>
          <span style={{ '--delay': 6 }} className="ball"></span>
          <span style={{ '--delay': 7 }} className="ball"></span>
          <span style={{ '--delay': 8 }} className="ball"></span>
        </div>
      ) : (
        <>
          <Nav />
          <Home />
          <About />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Portfolio;
