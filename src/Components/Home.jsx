import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroImage from '/home/wafiq/Documents/personal/portfolio/src/assets/Hero.jpg'; // Replace with your actual image path

const Home = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true); // Start showing text after component mounts
  }, []);

  // Function to scroll to the services section
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 py-32 text-white relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.9 }}
        >
          <AnimatePresence>
            {showText && (
              <motion.h1
                key="welcome-text"
                className="text-4xl md:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: [1, 0.5, 1], // Continuous opacity animation
                  transition: { duration: 2, repeat: Infinity }
                }}
              >
                Welcome to Wafiq's Portfolio
              </motion.h1>
            )}
          </AnimatePresence>
          <p className="text-lg">
            Discover my latest projects and explore my skills and expertise.
          </p>
          <div>
            {/* Apply the button styles directly here */}
            <button
              className="py-3 px-6 rounded-md transition-all duration-300 glow-on-hover"
              style={{
                '--glow-color': 'rgb(217, 176, 255)',
                '--glow-spread-color': 'rgba(191, 123, 255, 0.781)',
                '--enhanced-glow-color': 'rgb(231, 206, 255)',
                '--btn-color': 'rgb(100, 61, 136)',
                border: '.25em solid var(--glow-color)',
                padding: '1em 3em',
                color: 'var(--glow-color)',
                fontSize: '15px',
                fontWeight: 'bold',
                backgroundColor: 'var(--btn-color)',
                borderRadius: '1em',
                outline: 'none',
                boxShadow: '0 0 1em .25em var(--glow-color), 0 0 4em 1em var(--glow-spread-color), inset 0 0 .75em .25em var(--glow-color)',
                textShadow: '0 0 .5em var(--glow-color)',
                position: 'relative',
                transition: 'all 0.3s',
              }}
              onClick={handleScrollToServices} // Attach the function to onClick event
            >
              See More
            </button>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 relative overflow-hidden rounded-full shadow-lg"
          initial={{ opacity: 0, translateX: 40 }}
          animate={{
            opacity: 1,
            translateX: 0,
            boxShadow: '0 0 50px rgba(255, 255, 255, 0.9)',
            border: '10px solid rgba(255, 255, 255, 0.5)',
          }}
          transition={{
            duration: 2.0, // Slowed down from 0.8 to 1.2 seconds
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{
            filter: 'brightness(1.0)', // Adjust initial brightness
          }}
        >
          <img
            src={HeroImage} // Use the imported image here
            alt="Hero Image"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
