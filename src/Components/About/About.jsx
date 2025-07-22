import React from "react";
import { motion } from "framer-motion"; //eslint-disable-line
import { FiGithub, FiLinkedin } from "react-icons/fi";
import  profileAnimation from "../../Lottie-animation-file/lottie-animation.json"
import Lottie from "lottie-react";

const About = () => {
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

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
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
      className="min-h-screen bg-black py-30 relative overflow-hidden"
      data-theme="dark"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #8b5cf6 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">👋 About Me</span>
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 items-center relative">
            {/* Vertical Line */}
            <motion.div
              className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: "100%", opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            ></motion.div>

            {/* Left Side - Profile Image (1 column) */}
            <motion.div
              variants={imageVariants}
              className="flex justify-center lg:justify-center"
            >
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                <Lottie 
                  animationData={profileAnimation} 
                  loop={true} 
                  className="w-full h-full max-w-sm"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))'
                  }}
                />
              </div>
            </motion.div>

            {/* Right Side - About Text (2 columns) */}
            <motion.div
              variants={textVariants}
              className="lg:col-span-2 space-y-8 lg:pl-8"
            >
              <div className="space-y-6">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Hey there! I'm{" "}
                  <span className="gradient-text">Saddam Hosen</span>
                </motion.h3>

                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    A 3rd-year CSE student at HSTU and a passionate web
                    developer. I've completed Level 1 of Programming Hero (Batch
                    11) course and love building clean, responsive, and
                    user-friendly web applications.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    I'm comfortable with React, Node.js, Express, MongoDB, and
                    also love working with Tailwind CSS, DaisyUI, and modern
                    tools like Firebase. Always eager to learn new things and
                    bring ideas to life through code.
                  </motion.p>

                  <motion.div
                    className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-white font-medium text-xl">
                      💡 Currently exploring full-stack development and aiming
                      to become a skilled backend engineer, InshaAllah.
                    </p>
                  </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                  className="space-y-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h4 className="text-2xl font-semibold text-white">
                    Want to collaborate or hire me?
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href="https://linkedin.com/in/saddam-hosen"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-purple-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                    >
                      <FiLinkedin size={24} />
                      Connect on LinkedIn
                    </motion.a>
                    <motion.a
                      href="https://github.com/SaddamHosen42"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex items-center gap-2 px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 font-semibold rounded-xl transition-all duration-300"
                    >
                      <FiGithub size={24} />
                      Check GitHub
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
