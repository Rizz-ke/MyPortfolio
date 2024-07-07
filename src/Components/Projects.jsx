import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineProject, AiOutlineShoppingCart } from 'react-icons/ai'; // Example icons from react-icons
import { FaFilm, FaReact, FaPython, FaCss3Alt, FaJsSquare } from 'react-icons/fa'; // Additional example icons

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setHoveredIndex((prevIndex) => (prevIndex + 1) % projectData.length);
    }, 3000); // Adjust the interval time as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  const projectData = [
    {
      id: 1,
      imageUrl: 'src/assets/Project1.png',
      description: 'A project created with React, JavaScript, and CSS to give a user a view of how an e-commerce website looks like and its features.',
      projectLink: 'https://thunderous-mooncake-2633c1.netlify.app/',
      icon: <AiOutlineShoppingCart />,
      techIcons: [<FaReact key="react" />, <FaJsSquare key="js" />, <FaCss3Alt key="css" />],
    },
    {
      id: 2,
      imageUrl: 'src/assets/Project2.png',
      description: 'A project created with React, JavaScript, CSS, and FastAPI to give a user an experience of how a movie watchlist functions.',
      projectLink: 'https://flonnect.com/video/10f9c4ebd376-44a8-90a1-ad3ebbfb4e51',
      icon: <FaFilm />,
      techIcons: [<FaReact key="react" />, <FaJsSquare key="js" />, <FaCss3Alt key="css" />, <FaPython key="python" />],
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 py-32">
      <style>
        {`
          @keyframes shimmer {
            0% { background-color: #f59e0b; }
            50% { background-color: #fbbf24; }
            100% { background-color: #f59e0b; }
          }
          .shimmer-effect {
            animation: shimmer 2s infinite;
          }

          /* Updated button styles */
          button {
            background-color: #87ceeb; /* Light blue color */
            color: white; /* Text color */
            border-radius: 10em;
            font-size: 17px;
            font-weight: 600;
            padding: 1em 2em;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            border: 1px solid black;
            box-shadow: 0 0 0 0 black;
          }

          button:hover {
            transform: translateY(-4px) translateX(-2px);
            box-shadow: 2px 5px 0 0 black;
          }

          button:active {
            transform: translateY(2px) translateX(1px);
            box-shadow: 0 0 0 0 black;
          }

          .tech-icon {
            transition: transform 0.3s, color 0.3s;
          }

          .tech-icon:hover {
            transform: scale(1.2);
            color: #87ceeb; /* Change to desired hover color */
          }
        `}
      </style>
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-white flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="shimmer-effect"
            style={{ marginRight: '0.5rem', display: 'inline-block' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6, repeat: Infinity }}
          >
            <AiOutlineProject />
          </motion.span>
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-md shadow-lg overflow-hidden relative block"
              initial={{ opacity: 0, scale: 0.9, y: 20, x: 0 }} // Initial position with slight y offset
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0, 10, 0], x: [0, 10, 0, -10, 0] }} // Move around within a range
              transition={{ duration: 4, y: { duration: 2, yoyo: Infinity, ease: 'easeInOut' }, x: { duration: 3, yoyo: Infinity, ease: 'easeInOut' } }} // Adjust duration and easing as needed
              whileHover={{ scale: 1.05, y: -10 }} // Zoom in and lift slightly on hover
              whileTap={{ scale: 0.95 }} // Added whileTap animation
              style={{
                boxShadow: hoveredIndex === index ? '0 0 20px rgba(255, 255, 255, 0.5)' : 'none',
                transition: 'box-shadow 0.3s',
              }}
            >
              <motion.div
                className="w-full h-64 object-cover"
                style={{
                  backgroundImage: `url(${project.imageUrl})`,
                  filter: 'brightness(0.8)',
                  scale: hoveredIndex === index ? 1.05 : 1,
                  transition: 'transform 0.3s, filter 0.3s',
                }}
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6">
                <div className="flex items-center mb-2 text-blue-400">
                  {project.icon}
                  <h3 className="text-xl md:text-2xl font-bold ml-2">Project {project.id}</h3>
                </div>
                <p className="text-blue-400 mb-4">{project.description}</p>
                <div className="flex space-x-2 mb-4">
                  {project.techIcons.map((techIcon) => (
                    <span key={techIcon.key} className="text-2xl tech-icon">
                      {techIcon}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }} // Added whileTap animation for the button
                  className="button"
                >
                  Press Me
                </motion.button>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
