import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaVideo } from 'react-icons/fa';
import { AiFillPlayCircle } from 'react-icons/ai'; // Import fancier play circle icon
import './Services.css'; // Custom styles

const Services = () => {
  return (
    <section id="services" className="bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 py-32">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development Service */}
          <motion.div
            className="e-card relative overflow-hidden rounded-lg shine-effect"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className="wave"></div>
            <div className="wave" style={{ animationDuration: '40s' }}></div>
            <div className="wave" style={{ animationDuration: '45s' }}></div>
            <div className="card__content flex flex-col items-center justify-center p-6 bg-purple-900 rounded-lg h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Web Development</h3>
              <p className="text-gray-300 text-center">
                I specialize in building responsive and interactive user interfaces using
                <br />
                <span className="font-bold">React, JavaScript, HTML, and CSS.</span>
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <FaReact className="text-5xl text-blue-400 hover:text-blue-300 cursor-pointer" />
                <FaJs className="text-5xl text-yellow-400 hover:text-yellow-300 cursor-pointer" />
                <FaHtml5 className="text-5xl text-red-400 hover:text-red-300 cursor-pointer" />
                <FaCss3Alt className="text-5xl text-blue-600 hover:text-blue-500 cursor-pointer" />
              </div>
            </div>
          </motion.div>

          {/* Video Editing Service */}
          <motion.div
            className="e-card relative overflow-hidden rounded-lg shine-effect"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className="wave"></div>
            <div className="wave" style={{ animationDuration: '40s' }}></div>
            <div className="wave" style={{ animationDuration: '45s' }}></div>
            <div className="card__content flex flex-col items-center justify-center p-6 bg-purple-900 rounded-lg h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Video Editing</h3>
              <p className="text-gray-300 text-center">
                I specialize in editing videos and creating adverts using various video editing apps like CapCut and many more that I find beneficial.
              </p>
              {/* Animated text */}
              <motion.div
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-gray-400 text-center mt-4 mb-6"
              >
                <span className="inline-block px-3 py-1 bg-purple-600 rounded-md text-white font-bold text-sm shadow-md">
                  Check out some of my video work below:
                </span>
              </motion.div>
              {/* Video icons */}
              <div className="flex justify-center space-x-4 mt-4">
                <a href="src/assets/Video1.mp4" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center">
                  <FaVideo className="text-5xl text-red-600 hover:text-red-500 cursor-pointer" />
                  <AiFillPlayCircle className="text-6xl ml-2 text-red-400 hover:text-red-300" /> {/* Fancier play icon */}
                </a>
                <a href="src/assets/Video3.mp4" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center">
                  <FaVideo className="text-5xl text-red-600 hover:text-red-500 cursor-pointer" />
                  <AiFillPlayCircle className="text-6xl ml-2 text-red-400 hover:text-red-300" /> {/* Fancier play icon */}
                </a>
                <a href="src/assets/Video2.mp4" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center">
                  <FaVideo className="text-5xl text-red-600 hover:text-red-500 cursor-pointer" />
                  <AiFillPlayCircle className="text-6xl ml-2 text-red-400 hover:text-red-300" /> {/* Fancier play icon */}
                </a>
                {/* Add more video links as needed */}
              </div>
            </div>
          </motion.div>

          {/* Promotional Videos Service */}
          <motion.div
            className="e-card relative overflow-hidden rounded-lg shine-effect"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className="wave"></div>
            <div className="wave" style={{ animationDuration: '40s' }}></div>
            <div className="wave" style={{ animationDuration: '45s' }}></div>
            <div className="card__content flex flex-col items-center justify-center p-6 bg-purple-900 rounded-lg h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Promotional Videos</h3>
              <p className="text-gray-300 text-center">
                I create engaging promotional videos for businesses, products, or events to help you stand out and connect with your audience.
              </p>
              {/* Animated text */}
              <motion.div
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="text-gray-400 text-center mt-4 mb-6"
              >
                <span className="inline-block px-3 py-1 bg-purple-600 rounded-md text-white font-bold text-sm shadow-md">
                  Check out some of my promotional videos below:
                </span>
              </motion.div>
              {/* Video icons */}
              <div className="flex justify-center space-x-4 mt-4">
                <a href="/src/assets/Video3.mp4" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center">
                  <FaVideo className="text-5xl text-red-600 hover:text-red-500 cursor-pointer" />
                  <AiFillPlayCircle className="text-6xl ml-2 text-red-400 hover:text-red-300" /> {/* Fancier play icon */}
                </a>
                <a href="/src/assets/Video2.mp4" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center">
                  <FaVideo className="text-5xl text-red-600 hover:text-red-500 cursor-pointer" />
                  <AiFillPlayCircle className="text-6xl ml-2 text-red-400 hover:text-red-300" /> {/* Fancier play icon */}
                </a>
                <a href="/src/assets/Video1.mp4" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center">
                  <FaVideo className="text-5xl text-red-600 hover:text-red-500 cursor-pointer" />
                  <AiFillPlayCircle className="text-6xl ml-2 text-red-400 hover:text-red-300" /> {/* Fancier play icon */}
                </a>
                {/* Add more video links as needed */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
