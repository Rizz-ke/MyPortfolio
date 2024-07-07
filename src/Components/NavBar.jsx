import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { AiOutlineHome, AiOutlineUser, AiOutlineAppstore, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import Logo from '/src/assets/Logo.png'; // Replace with your actual logo path
import './Nav.css'; // Import your CSS file

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 shadow-md fixed w-full z-50">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="home" spy={true} smooth={true}>
            <motion.img
              src={Logo}
              alt="Logo"
              className="h-12 w-auto"
              whileHover={{
                scale: 1.1,
                filter: 'brightness(1.5) contrast(1.2)',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.7)',
              }}
              initial={{ opacity: 0.8, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            />
          </Link>
        </div>
        <div
          className={`md:flex items-center space-x-8 text-white font-medium ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            className="nav-link hover:text-blue-500 transition-colors duration-300 flex items-center"
          >
            <AiOutlineHome className="mr-2" size={20} />
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            className="nav-link hover:text-blue-500 transition-colors duration-300 flex items-center"
          >
            <AiOutlineUser className="mr-2" size={20} />
            About
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            className="nav-link hover:text-blue-500 transition-colors duration-300 flex items-center"
          >
            <AiOutlineAppstore className="mr-2" size={20} />
            Services
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            className="nav-link hover:text-blue-500 transition-colors duration-300 flex items-center"
          >
            <AiOutlineProject className="mr-2" size={20} />
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            className="nav-link hover:text-blue-500 transition-colors duration-300 flex items-center"
          >
            <AiOutlineMail className="mr-2" size={20} />
            Contact
          </Link>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className={`h-6 w-6 transition-transform duration-300 ${
              isMenuOpen ? 'transform rotate-90' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
