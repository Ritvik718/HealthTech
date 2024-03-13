import React from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaHospital,
  FaMicroscope,
  FaBook,
} from "react-icons/fa";
import "./Main.css";
import backbanner from "../../assets/backbanner.jpeg";

const Main = () => {
  return (
    <motion.div
      className="main-container mb-8"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="text-container bg-cover h-96 flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${backbanner})` }}
      >
        <motion.h1
          className="text-gray-800 text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Healthcare for Good
        </motion.h1>
        <motion.h1
          className="text-gray-800 text-5xl font-bold"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Today. Tomorrow. Always
        </motion.h1>
      </div>
      <motion.div
        className="button-container flex flex-wrap justify-center gap-4 mt-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="button-row">
          <motion.button
            className="button light-green hover:opacity-80"
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            <FaCalendarAlt className="inline-block mr-2" />
            <div>
              <span className="font-bold text-lg">Book an Appointment</span>
              <p className="text-sm">
                Book an appointment for your next checkup
              </p>
            </div>
          </motion.button>
          <motion.button
            className="button light-blue hover:opacity-80"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <FaHospital className="inline-block mr-2" />
            <div>
              <span className="font-bold text-lg">Hospitals</span>
              <p className="text-sm">Find hospitals near you</p>
            </div>
          </motion.button>
        </div>
        <div className="button-row">
          <motion.button
            className="button light-purple hover:opacity-80"
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            <FaMicroscope className="inline-block mr-2" />
            <div>
              <span className="font-bold text-lg">Diseases</span>
              <p className="text-sm">Learn about common diseases</p>
            </div>
          </motion.button>
          <motion.button
            className="button light-orange hover:opacity-80"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <FaBook className="inline-block mr-2" />
            <div>
              <span className="font-bold text-lg">Recommendations</span>
              <p className="text-sm">
                Get health and lifestyle recommendations
              </p>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Main;
