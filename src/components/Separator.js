import React from 'react';
import { motion } from 'framer-motion';

const Separator = ({ id }) => {
  return (
    <div id={id} className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="h-0.5 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 w-1/3" />
          <div className="mx-4">
            <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </svg>
          </div>
          <div className="h-0.5 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 dark:from-pink-600 dark:via-purple-600 dark:to-blue-600 w-1/3" />
        </motion.div>
      </div>
    </div>
  );
};

export default Separator;