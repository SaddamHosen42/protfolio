import React from 'react';
import { motion } from 'framer-motion'; 

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold"
        >
          <span className="gradient-text">Portfolio.</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex space-x-8 text-gray-300"
        >
          <motion.a 
            href="#about" 
            className="hover:text-purple-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            ABOUT
          </motion.a>
          <motion.a 
            href="#skills" 
            className="hover:text-purple-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            SKILLS
          </motion.a>
          <motion.a 
            href="#projects" 
            className="hover:text-purple-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            PROJECTS
          </motion.a>
          <motion.a 
            href="#contact" 
            className="hover:text-purple-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            CONTACT
          </motion.a>
        </motion.div>

        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="border border-purple-500 text-purple-400 px-4 py-2 rounded hover:bg-purple-500 hover:text-white transition-all duration-300"
        >
          Resume ↓
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
