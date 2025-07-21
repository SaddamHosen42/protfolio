import React from 'react';
import { motion } from 'framer-motion';//eslint-disable-line
import image from "../../assets/my-img-removebg-copy.png";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      id="about" 
      className="min-h-screen bg-black py-20 relative overflow-hidden"
      data-theme="dark"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #8b5cf6 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">👋 About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 items-center relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
            
            {/* Left Side - Profile Image (1 column) */}
            <motion.div 
              variants={itemVariants} 
              className="flex justify-center lg:justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6, #06b6d4, #3b82f6)',
                  padding: '4px',
                  boxShadow: '0 0 40px rgba(139, 92, 246, 0.3)',
                }}
              >
                <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center overflow-hidden relative">
                  <img 
                    src={image}
                    alt="Saddam Hosen - About"
                    className="w-full h-full object-cover rounded-2xl hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-cyan-400/10 rounded-2xl"></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - About Text (2 columns) */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8 lg:pl-8">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Hey there! I'm <span className="gradient-text">Saddam Hosen</span>
                </h3>
                
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    A 3rd-year CSE student at HSTU and a passionate web developer. 
                    I've completed Level 1 of Programming Hero (Batch 11) course 
                    and love building clean, responsive, and user-friendly web applications.
                  </p>
                  
                  <p>
                    I'm comfortable with React, Node.js, Express, MongoDB, 
                    and also love working with Tailwind CSS, DaisyUI, 
                    and modern tools like Firebase. 
                    Always eager to learn new things and bring ideas to life through code.
                  </p>
                  
                  <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-6">
                    <p className="text-white font-medium text-xl">
                      💡 Currently exploring full-stack development and 
                      aiming to become a skilled backend engineer, InshaAllah.
                    </p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="space-y-4 pt-4">
                  <h4 className="text-2xl font-semibold text-white">Want to collaborate or hire me?</h4>
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href="https://linkedin.com/in/saddam-hosen"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-purple-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                    >
                      Connect on LinkedIn
                    </motion.a>
                    <motion.a
                      href="https://github.com/SaddamHosen42"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 font-semibold rounded-xl transition-all duration-300"
                    >
                      Check GitHub
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;