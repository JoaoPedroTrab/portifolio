import React from 'react';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">
        <FormattedMessage id="projects.title" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                <FormattedMessage id={project.title} />
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                <FormattedMessage id={project.description} />
              </p>
              <div className="flex justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  aria-label={`View code for ${project.title}`}
                >
                  <Github className="w-4 h-4 mr-2" />
                  <FormattedMessage id="projects.viewCode" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-600 dark:text-green-400 hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
                  aria-label={`View live demo for ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <FormattedMessage id="projects.liveDemo" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;