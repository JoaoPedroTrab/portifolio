import React from 'react';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { skills } from '../data/skills';

const SkillBar = ({ skill }) => {
  return (
    <Tooltip
      title={skill.tooltip}
      position="top"
      animation="fade"
      arrow={true}
      duration={300}
    >
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex items-center mb-4">
          <skill.icon className="w-6 h-6 mr-3 text-blue-500" />
          <h3 className="text-lg font-semibold">{skill.name}</h3>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <motion.div 
            className="bg-blue-600 h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ backgroundColor: "#4FD1C5" }}
          />
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{skill.level}%</p>
      </motion.div>
    </Tooltip>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FormattedMessage id="skills.title" />
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillBar skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;