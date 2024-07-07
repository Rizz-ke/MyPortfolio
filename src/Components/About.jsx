import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import AboutImage from '/src/assets/About.jpg'; // Adjust the path relative to your component location
import './About.css'; // Import your CSS file for custom styles

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-teal-500 via-teal-600 to-green-500 py-32 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
        <motion.div
          className="relative md:w-1/2 md:mr-8 overflow-hidden rounded-full shadow-lg egg-shape"
          initial={{ opacity: 0.8, scale: 0.8, rotateZ: 45 }}
          animate={{ opacity: 1, scale: 1, rotateZ: 0,
            boxShadow: '0 0 50px rgba(255, 255, 255, 0.9)',
            border: '10px solid rgba(255, 255, 255, 0.5)'
          }}
          transition={{  duration: 2.0, // Slowed down from 0.8 to 1.2 seconds
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'}}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
            filter: 'brightness(1.3)',
            transition: { duration: 0.3 }
          }}
        >
          <img
            src={AboutImage} // Use the imported image here
            alt="About Image"
            className="w-full h-auto object-cover transform"
            style={{ filter: 'brightness(0.8)' }} // Initial dullness from the outside
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 shine-effect"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1,
              translateX: 0,
              boxShadow: '0 0 50px rgba(255, 255, 255, 0.9)',
              border: '10px solid rgba(255, 255, 255, 0.5)'}}
            transition={{ duration: 0.8 }}
            whileHover={{ opacity: 1, filter: 'brightness(2)' }}
          ></motion.div>
          <div className="bubble-container">
            <div className="bubble bubble-1"></div>
            <div className="bubble bubble-2"></div>
            <div className="bubble bubble-3"></div>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, translateX: 50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg leading-relaxed"
            >
             Hi, I'm Wafiq Mohamed, I'm passionate about creating engaging videos, developing dynamic web applications, and bringing ideas to life through meticulous editing. With a keen eye for detail and a drive for innovation, I strive to deliver high-quality content and solutions that captivate and inspire. Whether I'm coding a new feature, editing a stunning video, or brainstorming the next big project, I pour my creativity and dedication into everything I do
            </motion.p>
            <motion.p
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg leading-relaxed"
            >
              In my free time, you can find me editing videos or trying to come up with a new captivating project. I'm always eager to learn and grow, and I'm excited to share what i do with you .
            </motion.p>
            <motion.div
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8"
            >
              <Link
                to="projects"  // Replace with the ID of your projects section
                spy={true}
                smooth={true}
                className="about-button"
              >
                View My Projects Esteemed Guest!
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
