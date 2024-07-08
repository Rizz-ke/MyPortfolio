import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';  // Import the CSS file

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 py-32">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Talk to me</h2>
        <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {socialMediaLinks.map((social, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-6 glow-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: [0.9, 1.1, 0.9], 
                transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
              }}
            >
              <img src={social.image} alt={social.name} className="w-full h-32 object-cover mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">{social.name}</h3>
              <a
                href={social.link}
                className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            </motion.div>
          ))}
          {/* WhatsApp Card */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-6 glow-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: [0.9, 1.1, 0.9], 
              transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
            }}
          >
            <img
              src="https://pbs.twimg.com/profile_images/1807027246646894593/mwQ42Fa1_400x400.jpg" // Replace with your WhatsApp image URL or local path
              alt="WhatsApp"
              className="w-full h-32 object-cover mb-4"
            />
            <h3 className="text-lg font-medium text-gray-700 mb-2">WhatsApp</h3>
            {/* Replace with your WhatsApp number */}
            <p className="text-gray-500">0726041039</p>
            <a
              href="https://wa.me/0726041039" // Replace with your WhatsApp link
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineWhatsApp size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const socialMediaLinks = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/de_rizz_ke?igsh=MXA2MHlvMTU3d3J0eQ==',
    icon: <AiOutlineInstagram size={24} />,
    image: 'https://pbs.twimg.com/profile_images/1807027246646894593/mwQ42Fa1_400x400.jpg',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/wafiq-mohamed-0b6465305/',
    icon: <FaLinkedin size={24} />,
    image: '/src/assets/Linkedin.jpeg',
  },
  {
    name: 'Twitter',
    link: 'https://x.com/de_rizz_ke?t=0J3kU1hkad6gzBzalppsPw&s=08&mx=2',
    icon: <AiOutlineTwitter size={24} />,
    image: 'https://pbs.twimg.com/profile_images/1807027246646894593/mwQ42Fa1_400x400.jpg',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/Rizz-ke',
    icon: <FaGithub size={24} />,
    image: 'https://avatars.githubusercontent.com/u/161529408?v=4',
  },
];

export default Contact;
