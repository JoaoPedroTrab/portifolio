import React from 'react';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';
import { ChevronDown, Gamepad2, Code } from 'lucide-react';
import { useTheme } from 'next-themes';

const Home = () => {
  const { theme } = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background com blur */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://repository-images.githubusercontent.com/302617083/fb5cbc00-0a67-11eb-9c37-3f829f3f7382')",
          backgroundSize: '120% auto',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(5px)',
          transform: 'scale(1.1)',
        }}
      ></div>
      
      {/* Overlay para ajustar o contraste */}
      <div className={`absolute inset-0 z-10 ${theme === 'light' ? 'bg-white bg-opacity-70' : 'bg-gray-900 bg-opacity-80'}`}></div>
      
      <motion.div 
        className="text-center z-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          <FormattedMessage id="home.title" />
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-10 text-gray-800 dark:text-gray-100 font-medium"
          variants={itemVariants}
        >
          <FormattedMessage id="home.subtitle" />
        </motion.p>
        <motion.div variants={itemVariants} className="flex justify-center space-x-4">
          <a 
            href="#projects" 
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Gamepad2 className="w-5 h-5 mr-2 text-white" />
            <span className="text-white">
              <FormattedMessage id="home.viewProjects" />
            </span>
          </a>
          <a 
            href="#skills" 
            className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <Code className="w-5 h-5 mr-2 text-white" />
            <span className="text-white">
              <FormattedMessage id="home.viewSkills" />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;