import React from 'react';
import { motion } from 'framer-motion'; //eslint-disable-line
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiHeart } from 'react-icons/fi';
import { SiReact, SiTailwindcss, SiFramer } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      url: 'https://github.com/SaddamHosen42',
      color: '#ffffff'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://linkedin.com/in/saddam-hosen',
      color: '#0077b5'
    },
    {
      name: 'Email',
      icon: FiMail,
      url: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new',
      color: '#ea4335'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        window.history.pushState(null, null, href);
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-16"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    Saddam Hosen
                  </span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Full-stack developer passionate about creating exceptional digital experiences. 
                  Always learning, always coding, always improving.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <FiMapPin className="text-purple-400" size={18} />
                  <span>Dinajpur, Bangladesh</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FiMail className="text-purple-400" size={18} />
                  <a href="mailto:saddamhosen.dev@gmail.com" className="hover:text-purple-400 transition-colors">
                    saddamhosen1433@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FiPhone className="text-purple-400" size={18} />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social & Tech Stack */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-white mb-6">Connect & Tech</h4>
              
              {/* Social Links */}
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ '--hover-color': social.color }}
                  >
                    <social.icon size={20} className="text-gray-300 hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>

              {/* Built With */}
              <div>
                <p className="text-gray-400 text-sm mb-3">Built with</p>
                <div className="flex gap-3">
                  <SiReact className="text-cyan-400" size={24} title="React" />
                  <SiTailwindcss className="text-cyan-500" size={24} title="Tailwind CSS" />
                  <SiFramer className="text-purple-500" size={24} title="Framer Motion" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"
          ></motion.div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <span>&copy; {currentYear} Saddam Hosen. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <FiHeart className="text-red-500 animate-pulse" size={16} />
              <span>in Bangladesh</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;