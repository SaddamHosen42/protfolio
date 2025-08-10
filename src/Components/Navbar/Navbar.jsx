import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; //eslint-disable-line
import { VscTerminal } from 'react-icons/vsc';
import { HiMenu, HiX } from 'react-icons/hi';


const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
    setIsDrawerOpen(false); // Close drawer after navigation
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-gray-900 shadow-lg md:bg-transparent md:backdrop-blur-md">
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
            href="#education" 
            onClick={(e) => handleNavClick(e, 'education')}
            className="hover:text-purple-400 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            EDUCATION
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

        {/* Mobile Hamburger Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:hidden text-white text-2xl z-50 relative"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isDrawerOpen ? <HiX /> : <HiMenu />}
        </motion.button>

        <motion.a
          href="https://drive.google.com/file/d/1EIpjyVGLSV_nfnlTtICc3kEd8JMmsSVm/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="hidden md:block border border-purple-500 text-purple-400 px-4 py-2 rounded hover:bg-purple-500 hover:text-white transition-all duration-300"
        >
          Resume ↓
        </motion.a>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-gray-900 z-40 md:hidden"
          >
            <div className="flex flex-col pt-20 px-8 space-y-8">
              <motion.a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer text-lg"
                whileHover={{ scale: 1.05, x: 10 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                ABOUT
              </motion.a>
              <motion.a 
                href="#education" 
                onClick={(e) => handleNavClick(e, 'education')}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer text-lg"
                whileHover={{ scale: 1.05, x: 10 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                EDUCATION
              </motion.a>
              <motion.a 
                href="#skills" 
                onClick={(e) => handleNavClick(e, 'skills')}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer text-lg"
                whileHover={{ scale: 1.05, x: 10 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                SKILLS
              </motion.a>
              <motion.a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, 'projects')}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer text-lg"
                whileHover={{ scale: 1.05, x: 10 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                PROJECTS
              </motion.a>
              <motion.a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer text-lg"
                whileHover={{ scale: 1.05, x: 10 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                CONTACT
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1EIpjyVGLSV_nfnlTtICc3kEd8JMmsSVm/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-purple-500 text-purple-400 px-4 py-2 rounded hover:bg-purple-500 hover:text-white transition-all duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                Resume ↓
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsDrawerOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
