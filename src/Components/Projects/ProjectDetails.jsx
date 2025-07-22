import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';//eslint-disable-line
import { useParams, useNavigate } from 'react-router';
import { FiArrowLeft, FiStar, FiExternalLink, FiGithub } from 'react-icons/fi';
import {
  SiReact,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

const ProjectDetails = () => {
  const { projectId } = useParams();
  console.log('Project ID:', projectId);
  
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
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

    const fetchProject = async () => {
      try {
        const response = await fetch('/projects.json');
        const data = await response.json();
        
        // Find the specific project by ID
        const foundProject = data.find(p => p.id === parseInt(projectId));
        
        if (foundProject) {
          // Process the project data to include actual icon components
          const processedProject = {
            ...foundProject,
            technologies: foundProject.technologies.map(tech => ({
              ...tech,
              icon: iconMap[tech.icon] || SiReact // fallback icon
            }))
          };
          
          setProject(processedProject);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching project:', error);
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Loading Project Details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300"
          >
            <FiArrowLeft className="inline mr-2" />
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Navigation Header */}
      <div className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FiArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Hero Section */}
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 lg:h-96 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6">
              <div className="flex items-center gap-2 mb-2">
                <FiStar className="text-yellow-400" size={20} />
                <span className="text-yellow-400 font-medium">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                {project.title}
              </h1>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  About This Project
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-xl"
                    >
                      <div className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Technologies
                </h2>
                <div className="space-y-3">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: techIndex * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-3 bg-gray-700/50 border border-gray-600 rounded-xl hover:border-gray-500 transition-all duration-300"
                    >
                      <tech.icon size={24} style={{ color: tech.color }} />
                      <span className="text-gray-300 font-medium">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Project Links
                </h2>
                <div className="space-y-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                  >
                    <FiExternalLink size={20} />
                    Visit Live Site
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 w-full px-6 py-4 border-2 border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700/50 font-semibold rounded-xl transition-all duration-300"
                  >
                    <FiGithub size={20} />
                    View Source Code
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;