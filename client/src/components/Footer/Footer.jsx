import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="bg-gray-800 text-white py-6"
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col lg:flex-row">
          <ul className="flex flex-wrap justify-center lg:justify-start">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mr-6 mb-2 lg:mb-0"
            >
              <a href="/get-started" className="hover:text-gray-400">
                Get Started
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mr-6 mb-2 lg:mb-0"
            >
              <a href="/recommended-articles" className="hover:text-gray-400">
                Recommended Articles
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mr-6 mb-2 lg:mb-0"
            >
              <a href="/terms" className="hover:text-gray-400">
                Terms
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mb-2 lg:mb-0"
            >
              <a href="/privacy-policy" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </motion.li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex mt-4 lg:mt-0"
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
