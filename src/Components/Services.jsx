import React from 'react';
import { FaVideo } from 'react-icons/fa';
import { AiFillPlayCircle } from 'react-icons/ai';

const Services = () => {
  return (
    <section id="services" className="bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 py-32">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development Service */}
          <div className="e-card relative overflow-hidden rounded-lg shine-effect">
            <div className="card__content flex flex-col items-center justify-center p-6 bg-purple-900 rounded-lg h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Web Development</h3>
              <p className="text-gray-300 text-center">
                I specialize in building responsive and interactive user interfaces using
                <br />
                <span className="font-bold">React, JavaScript, HTML, and CSS.</span>
              </p>
            </div>
          </div>

          {/* Video Editing Service */}
          <div className="e-card relative overflow-hidden rounded-lg shine-effect">
            <div className="card__content flex flex-col items-center justify-center p-6 bg-purple-900 rounded-lg h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Video Editing</h3>
              <p className="text-gray-300 text-center">
                I specialize in editing videos and creating adverts using various video editing apps like CapCut and many more that I find beneficial.
              </p>
              {/* Animated text */}
              <div className="text-gray-400 text-center mt-4 mb-6">
                <span className="inline-block px-3 py-1 bg-purple-600 rounded-md text-white font-bold text-sm shadow-md">
                  Check out some of my video work below:
                </span>
              </div>
              {/* Video icons */}
              <div className="flex justify-center space-x-4 mt-4">
                <a href="/assets/Video1.mp4" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center">
                  <FaVideo className="text-5xl text-red-600 hover:text-red-500 cursor-pointer" />
                  <AiFillPlayCircle className="text-6xl ml-2 text-red-400 hover:text-red-300" /> {/* Fancier play icon */}
                </a>
                <a href="/assets/Video2.mp4" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center">
                  <FaVideo className="text-5xl text-red-600 hover:text-red-500 cursor-pointer" />
                  <AiFillPlayCircle className="text-6xl ml-2 text-red-400 hover:text-red-300" /> {/* Fancier play icon */}
                </a>
                <a href="/assets/Video3.mp4" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center">
                  <FaVideo className="text-5xl text-red-600 hover:text-red-500 cursor-pointer" />
                  <AiFillPlayCircle className="text-6xl ml-2 text-red-400 hover:text-red-300" /> {/* Fancier play icon */}
                </a>
                {/* Add more video links as needed */}
              </div>
            </div>
          </div>

          {/* Promotional Videos Service */}
          <div className="e-card relative overflow-hidden rounded-lg shine-effect">
            <div className="card__content flex flex-col items-center justify-center p-6 bg-purple-900 rounded-lg h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Promotional Videos</h3>
              <p className="text-gray-300 text-center">
                I create engaging promotional videos for businesses, products, or events to help you stand out and connect with your audience.
              </p>
              {/* Animated text */}
              <div className="text-gray-400 text-center mt-4 mb-6">
                <span className="inline-block px-3 py-1 bg-purple-600 rounded-md text-white font-bold text-sm shadow-md">
                  Check out some of my promotional videos below:
                </span>
              </div>
              {/* Video icons */}
              <div className="flex justify-center space-x-4 mt-4">
                <a href="/assets/Video1.mp4" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center">
                  <FaVideo className="text-5xl text-red-600 hover:text-red-500 cursor-pointer" />
                  <AiFillPlayCircle className="text-6xl ml-2 text-red-400 hover:text-red-300" /> {/* Fancier play icon */}
                </a>
                <a href="/assets/Video2.mp4" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center">
                  <FaVideo className="text-5xl text-red-600 hover:text-red-500 cursor-pointer" />
                  <AiFillPlayCircle className="text-6xl ml-2 text-red-400 hover:text-red-300" /> {/* Fancier play icon */}
                </a>
                <a href="/assets/Video3.mp4" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center">
                  <FaVideo className="text-5xl text-red-600 hover:text-red-500 cursor-pointer" />
                  <AiFillPlayCircle className="text-6xl ml-2 text-red-400 hover:text-red-300" /> {/* Fancier play icon */}
                </a>
                {/* Add more video links as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
