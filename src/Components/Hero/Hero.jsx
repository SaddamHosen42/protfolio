import React from "react";
import { motion } from "framer-motion"; //eslint-disable-line
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaDownload, FaFacebook } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import image from "../../assets/my-img-removebg-copy.png";
import { CiViewList } from "react-icons/ci";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 1.2,
      },
    },
  };

  const circleVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const reverseCircleVariants = {
    animate: {
      rotate: -360,
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pb-10"
      data-theme="dark"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #8b5cf6 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Navigation */}
      <Navbar />

      <div className="container mx-auto px-6 relative z-10 w-[90%] lg:w-[80%] mt-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              variants={itemVariants}
              whileInView={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <span className="text-gray-300 text-lg md:text-xl font-medium">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
            >
              <span className="gradient-text">Saddam Hosen</span>
            </motion.h1>

            {/* Title/Role */}
            <motion.div
              variants={itemVariants}
              className="space-y-3"
              whileInView={{ x: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                Full-Stack MERN Developer
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Passionate about crafting{" "}
                <span className="gradient-text font-semibold">
                  scalable web applications
                </span>{" "}
                and turning innovative ideas into digital reality. Specialized
                in modern JavaScript technologies and user-centered design.
              </p>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-6"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.08,
                  y: -3,
                  boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(139, 92, 246, 0.3)",
                    "0 0 30px rgba(139, 92, 246, 0.5)",
                    "0 0 20px rgba(139, 92, 246, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className=" cursor-pointer flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <CiViewList size={25} />
                View My Work
              </motion.a>
              <motion.a
                href="/Saddam_Hosen_Resume.pdf"
                download={true}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.08,
                  y: -3,
                  borderColor: "#a855f7",
                  backgroundColor: "rgba(168, 85, 247, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer flex items-center gap-2 px-8 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                <FaDownload />
                Download CV
              </motion.a>
            </motion.div>

            {/* Professional Social Links */}
            <motion.div variants={itemVariants} className="flex space-x-5 pt-4">
              <motion.a
                href="https://github.com/SaddamHosen42"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800/50 backdrop-blur-sm text-gray-400 hover:text-white hover:bg-purple-600/20 border border-gray-700 hover:border-purple-500 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                aria-label="GitHub Profile"
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/saddam-hosen"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800/50 backdrop-blur-sm text-gray-400 hover:text-white hover:bg-blue-600/20 border border-gray-700 hover:border-blue-500 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/saddamhosen4"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  rotate: [0, -15, 15, 0],
                  transition: { duration: 0.4 },
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800/50 backdrop-blur-sm text-gray-400 hover:text-white hover:bg-sky-600/20 border border-gray-700 hover:border-sky-500 rounded-lg transition-all duration-300 shadow-lg hover:shadow-sky-500/20"
                aria-label="Twitter Profile"
              >
                <FaFacebook size={24} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  rotate: [0, 12, -12, 0],
                  transition: { duration: 0.35 },
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800/50 backdrop-blur-sm text-gray-400 hover:text-white hover:bg-green-600/20 border border-gray-700 hover:border-green-500 rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/20"
                aria-label="Email Contact"
              >
                <FiMail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.8,
              type: "spring",
              stiffness: 60,
              damping: 15,
            }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Outer rotating circles - Forward rotation */}
              <motion.div
                variants={circleVariants}
                animate="animate"
                className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 flex items-center justify-center"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 400 400"
                  className="absolute inset-0"
                >
                  {/* Outer circle */}
                  <circle
                    cx="200"
                    cy="200"
                    r="170"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    strokeDasharray="30 20"
                    opacity="0.8"
                    strokeLinecap="round"
                  />
                  {/* Inner circle */}
                  <circle
                    cx="200"
                    cy="200"
                    r="130"
                    fill="none"
                    stroke="url(#gradient3)"
                    strokeWidth="1.5"
                    strokeDasharray="20 15"
                    opacity="0.5"
                    strokeLinecap="round"
                  />

                  {/* Gradient definitions */}
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="30%" stopColor="#a855f7" />
                      <stop offset="70%" stopColor="#c084fc" />
                      <stop offset="100%" stopColor="#e879f9" />
                    </linearGradient>
                    <linearGradient
                      id="gradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                    <linearGradient
                      id="gradient3"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Middle rotating circles - Reverse rotation */}
              <motion.div
                variants={reverseCircleVariants}
                animate="animate"
                className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 flex items-center justify-center"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 400 400"
                  className="absolute inset-0"
                >
                  {/* Middle circle with reverse rotation */}
                  <circle
                    cx="200"
                    cy="200"
                    r="150"
                    fill="none"
                    stroke="url(#gradient2)"
                    strokeWidth="1.5"
                    strokeDasharray="25 18"
                    opacity="0.6"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              {/* Profile Image Container */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.6 },
                }}
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative z-10 w-64 h-64 md:w-76 md:h-76 rounded-full overflow-hidden mx-auto"
                style={{
                  background:
                    "linear-gradient(135deg, #8b5cf6, #06b6d4, #3b82f6)",
                  padding: "4px",
                  boxShadow:
                    "0 0 40px rgba(139, 92, 246, 0.4), 0 0 80px rgba(139, 92, 246, 0.2)",
                }}
              >
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden relative">
                  {/* Your actual profile image */}
                  <img
                    src={image}
                    alt="Saddam Hosen - Profile"
                    className="w-full h-full rounded-full object-cover hover:scale-110 transition-transform duration-500"
                  />

                  {/* Enhanced glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 via-transparent to-cyan-400/20 rounded-full"></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                </div>
              </motion.div>

              {/* Enhanced Floating dots */}
              <motion.div
                animate={{
                  y: [-12, 12, -12],
                  x: [-3, 3, -3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-16 -right-10 w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-70 shadow-lg"
                style={{ filter: "blur(0.5px)" }}
              />
              <motion.div
                animate={{
                  y: [15, -15, 15],
                  x: [2, -2, 2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute bottom-16 -left-10 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 shadow-lg"
                style={{ filter: "blur(0.5px)" }}
              />
              <motion.div
                animate={{
                  y: [-18, 18, -18],
                  x: [-2, 4, -2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3,
                }}
                className="absolute top-1/2 -right-14 w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-50 shadow-lg"
                style={{ filter: "blur(0.5px)" }}
              />
              <motion.div
                animate={{
                  y: [10, -10, 10],
                  x: [-4, 2, -4],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute top-8 -left-6 w-2.5 h-2.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full opacity-60 shadow-lg"
                style={{ filter: "blur(0.5px)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
