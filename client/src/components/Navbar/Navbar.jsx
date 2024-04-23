import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  return (
    <motion.nav
      className="navbar bg-white py-6 px-6 flex items-center justify-between"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-lg uppercase font-bold text-blue-700"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        NxtGenDGNS
      </motion.div>
      <div className="container flex items-center">
        <div className="hidden md:flex nav-links">
          <motion.div
            className="nav-link mr-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/tests">Tests</Link>
          </motion.div>
          <motion.div
            className="nav-link mr-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/articles">Articles</Link>
          </motion.div>
          <motion.div
            className="nav-link mr-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/about">About</Link>
          </motion.div>
        </div>
        <div className="flex ml-auto">
          <div className="ml-auto flex">
            {" "}
            {/* Added flex class */}
            <motion.div
              className="nav-link mr-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/login">Login</Link>
            </motion.div>
            <motion.div
              className="nav-link mr-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/signup">SignUp</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
