import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="mb-4 md:mb-0"
          initial={{ opacity: 0, translateX: -50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>&copy; 2024 Wafiq. All rights reserved.</p>
        </motion.div>
        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0, translateX: 50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://www.instagram.com/de_rizz_ke?igsh=MXA2MHlvMTU3d3J0eQ=="
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <AiOutlineInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/wafiq-mohamed-0b6465305/"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://x.com/de_rizz_ke?t=0J3kU1hkad6gzBzalppsPw&s=08&mx=2"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <AiOutlineTwitter size={24} />
          </a>
          <a
            href="https://github.com/Rizz-ke"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
