import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; //eslint-disable-line
import { FiExternalLink, FiCode, FiEye } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import {
  SiReact,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Icon mapping for technology icons
    const iconMap = {
      SiReact,
      SiFirebase,
      SiTailwindcss,
      SiJavascript,
      SiMongodb,
      SiNodedotjs,
      SiExpress,
    };

    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json');
        const data = await response.json();
        
        // Map the JSON data to include actual icon components
        const processedProjects = data.map(project => ({
          ...project,
          technologies: project.technologies.map(tech => ({
            ...tech,
            icon: iconMap[tech.icon] || SiReact // fallback icon
          }))
        }));
        
        setProjects(processedProjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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

  // Loading state
  if (loading) {
    return (
      <section
        id="projects"
        className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 relative overflow-hidden flex items-center justify-center"
        data-theme="dark"
      >
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Loading Projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
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
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in
              modern web development, from frontend design to full-stack
              applications.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -15, rotateY: 5 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden group-hover:border-blue-500/50 transition-all duration-500 h-[520px] flex flex-col">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48 flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 flex-1 line-clamp-4">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 mt-auto">
                      <motion.button
                        onClick={() => navigate(`/project/${project.id}`)}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                      >
                        <FiEye size={16} />

                       <Link to={`/project/${project.id}`}>
                         View Details
                       </Link>
                      </motion.button>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white text-sm font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
                      >
                        <FiExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-20">
            <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-10 max-w-4xl mx-auto backdrop-blur-sm">
              <FiCode className="mx-auto text-blue-400 mb-4" size={48} />
              <h3 className="text-3xl font-bold text-white mb-6">
                Want to see more projects?
              </h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I'm always working on new projects and exploring different
                technologies. Check out my GitHub profile for more repositories
                and contributions.
              </p>
              <motion.a
                href="https://github.com/SaddamHosen42"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
              >
                <FiGithub size={24} />
                View All Projects
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
