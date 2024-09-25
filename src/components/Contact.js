import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString()
      });
      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const inputClasses = "w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300";

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FormattedMessage id="contact.title" />
        </motion.h2>
        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FormattedMessage id="contact.name" />
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={inputClasses}
              required
              aria-required="true"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FormattedMessage id="contact.email" />
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={inputClasses}
              required
              aria-required="true"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FormattedMessage id="contact.message" />
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={inputClasses}
              required
              aria-required="true"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <motion.div
                className="w-6 h-6 border-t-2 border-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                <FormattedMessage id="contact.send" />
              </>
            )}
          </motion.button>
          {status === 'success' && (
            <motion.p
              className="mt-4 text-green-600 dark:text-green-400 flex items-center justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              role="alert"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              <FormattedMessage id="contact.success" />
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              className="mt-4 text-red-600 dark:text-red-400 flex items-center justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              role="alert"
            >
              <AlertCircle className="w-5 h-5 mr-2" />
              <FormattedMessage id="contact.error" />
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;