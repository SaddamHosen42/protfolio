import React from 'react';
import { motion } from 'framer-motion';//eslint-disable-line
import { 
  SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase,
  SiPython, SiCplusplus, SiC,
  SiGit, SiGithub, SiFigma, SiPostman, SiVercel, SiNetlify, SiNpm, SiDaisyui
} from 'react-icons/si';
import { FaDatabase, FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

const Skills = () => {
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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 1,
      },
    },
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: SiReact,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
        { name: 'DaisyUI', icon: SiDaisyui, color: '#5A67D8' },
      ]
    },
    {
      title: "Backend",
      icon: SiNodedotjs,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        { name: 'Database', icon: FaDatabase, color: '#FF6B6B' },
      ]
    },
    {
      title: "Programming",
      icon: SiPython,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'C', icon: SiC, color: '#A8B9CC' },
        { name: 'Java', icon: FaJava, color: '#ED8B00' },
      ]
    },
    {
      title: "Tech & Tools",
      icon: SiGit,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
        { name: 'VS Code', icon: VscCode, color: '#007ACC' },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
        { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
        { name: 'NPM', icon: SiNpm, color: '#CB3837' },
        { name: 'Pixo', icon: SiFigma, color: '#9333EA' },
      ]
    }
  ];

  return (
    <section 
      id="skills" 
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
          <motion.div 
            variants={itemVariants} 
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
              Explore the technologies and tools I use to create exceptional digital experiences
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -8 }}
                className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 shadow-2xl"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mt-1"></div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className="group"
                    >
                      <div className="bg-gray-700/40 hover:bg-gray-600/60 border border-gray-600/50 hover:border-gray-500 rounded-xl p-4 transition-all duration-300 text-center cursor-pointer">
                        <skill.icon 
                          size={32} 
                          className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300"
                          style={{ color: skill.color }}
                        />
                        <span className="text-gray-300 group-hover:text-white text-xs font-medium block">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-10 max-w-4xl mx-auto backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-6">
                 Continuously Learning & Evolving
              </h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Technology never stops evolving, and neither do I. I'm passionate about learning new tools, 
                frameworks, and best practices to deliver cutting-edge solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm">
                  Full-Stack Development
                </span>
                <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                  Modern Frameworks
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm">
                  Best Practices
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;