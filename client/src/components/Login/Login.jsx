import React, { useState } from "react";
import img1 from "../../assets/back.webp";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send user data to backend
      const response = await axios.post(
        "http://localhost:3000/api/signin",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
      >
        <div className="text-xl font-bold text-left mb-6">Nxt Gen DGNS</div>
        <h3 className="text-lg font-bold mb-2">Sign Up</h3>
        <p className="text-gray-600 mb-6">to continue to NxtGenDGNS</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="flex items-center bg-gray-900 text-white w-full py-2 px-4 mb-4 rounded-lg"
        >
          <FaGithub className="mr-2" />
          Continue with Github
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="flex items-center bg-red-600 text-white w-full py-2 px-4 mb-4 rounded-lg"
        >
          <FaGoogle className="mr-2" />
          Continue with Google
        </motion.button>
        <div className="flex items-center justify-center w-full mb-6">
          <div className="border-t border-gray-400 w-full"></div>
          <div className="px-3 text-gray-600">or</div>
          <div className="border-t border-gray-400 w-full"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Link to="/recommendation">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-purple-600 text-white w-full py-2 px-4 mb-4 rounded-lg"
            >
              Continue
            </motion.button>
          </Link>
        </form>

        <div className="text-sm text-gray-600 text-left">
          No account? Sign Up
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
