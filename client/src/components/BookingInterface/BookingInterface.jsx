import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/doc.png"; // Import sample image for the card
import img2 from "../../assets/doc2.jpeg"; // Import another sample image for the card
import { Link } from "react-router-dom";

const BookingInterface = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-3xl font-bold mb-8 text-center mt-24"
      >
        Book an Appointment Here
      </motion.h1>
      {/* Search bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mb-8"
      >
        <input
          type="text"
          placeholder="Search for clinics or hospitals..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex flex-wrap mb-8"
      >
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0">
          <label className="block text-gray-700 mb-2">Price:</label>
          {/* Price filter dropdown */}
          <select className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="">All</option>
            <option value="low">Low-High</option>
            <option value="high">High-Low</option>
          </select>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0">
          <label className="block text-gray-700 mb-2">Location:</label>
          {/* Location filter dropdown */}
          <select className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="">All</option>
            <option value="city">City</option>
            <option value="suburb">Suburb</option>
          </select>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3">
          <label className="block text-gray-700 mb-2">Urgency:</label>
          {/* Urgency filter dropdown */}
          <select className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="">All</option>
            <option value="urgent">Urgent</option>
            <option value="non-urgent">Non-urgent</option>
          </select>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* Sample Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="border rounded-lg shadow-md"
        >
          <img
            src={img1}
            alt="Clinic 1"
            className="mb-4 rounded-t-lg w-full h-48 object-cover"
          />
          <div className="p-4">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="text-xl font-semibold mb-2 truncate"
            >
              Appolo Hospital
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.7 }}
              className="text-gray-600 mb-2 truncate"
            >
              Location: Chennai, India
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.9 }}
              className="text-gray-600 mb-2 truncate"
            >
              Rating: 4.5
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3.1 }}
              className="text-gray-600 mb-2 truncate"
            >
              Price Range: 4500
            </motion.p>
            <Link
              to="/https://www.apollohospitals.com/"
              className="inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
              >
                Book Now
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Sample Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="border rounded-lg shadow-md"
        >
          <img
            src={img2}
            alt="Clinic 2"
            className="mb-4 rounded-t-lg w-full h-48 object-cover"
          />
          <div className="p-4">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="text-xl font-semibold mb-2 truncate"
            >
              Medanta Hospital
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.7 }}
              className="text-gray-600 mb-2 truncate"
            >
              Location: Delhi, India
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.9 }}
              className="text-gray-600 mb-2 truncate"
            >
              Rating: 4.2
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3.1 }}
              className="text-gray-600 mb-2 truncate"
            >
              Price Range: 3500
            </motion.p>
            <Link to="https://www.medanta.org/" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
              >
                Book Now
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Add more cards here */}
      </motion.div>
    </motion.div>
  );
};

export default BookingInterface;
