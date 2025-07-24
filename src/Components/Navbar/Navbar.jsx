import React from 'react';
import { motion } from 'framer-motion'; //eslint-disable-line
import { VscTerminal } from 'react-icons/vsc';


const Navbar = () => {
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Update the URL hash
      window.history.pushState(null, null, `#${elementId}`);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-transparent backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState(null, null, '/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="gradient-text flex items-center gap-2">
            <VscTerminal className='text-white' />
            Saddam
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex space-x-8 text-gray-300"
        >
          <motion.a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className="hover:text-purple-400 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            ABOUT
          </motion.a>
          <motion.a 
            href="#skills" 
            onClick={(e) => handleNavClick(e, 'skills')}
            className="hover:text-purple-400 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            SKILLS
          </motion.a>
          <motion.a 
            href="#projects" 
            onClick={(e) => handleNavClick(e, 'projects')}
            className="hover:text-purple-400 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            PROJECTS
          </motion.a>
          <motion.a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hover:text-purple-400 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            CONTACT
          </motion.a>
        </motion.div>

        <motion.a
          href="https://drive.google.com/file/d/1EIpjyVGLSV_nfnlTtICc3kEd8JMmsSVm/view?usp=drive_link"
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
