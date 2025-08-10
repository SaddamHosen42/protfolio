import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion'; //eslint-disable-line
import Lottie from "lottie-react";
import ContactAnimation from "../../Lottie-animation-file/Contact-Lottie-Animation.json";
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const form=useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent successfully! I\'ll get back to you soon.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send message. Please try again.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setIsSubmitting(false);
        },
      );
  };

 
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

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "saddamhosen1433@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: FiPhone,
      title: "WhatsApp",
      value: "+880 1627482575",
      color: "text-green-400"
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "Tangail, Dhaka, Bangladesh",
      color: "text-purple-400"
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 relative overflow-hidden"
      data-theme="dark"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center`}>
                  <info.icon className={info.color} size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-gray-300">{info.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content: Form + Animation */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Send me a message</h3>
                <p className="text-gray-300 text-lg">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form ref={form} onSubmit={handleSubmit}  className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <label className="block text-white font-medium mb-2">
                    <FiUser className="inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label className="block text-white font-medium mb-2">
                    <FiMail className="inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-white font-medium mb-2">
                    <FiMessageSquare className="inline mr-2" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Lottie Animation */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center"
            >
              <div className="w-full max-w-lg">
                <Lottie
                  animationData={ContactAnimation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-auto"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.3))'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;