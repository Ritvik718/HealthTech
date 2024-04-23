import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaHospital,
  FaMicroscope,
  FaBook,
} from "react-icons/fa";
import "./Main.css";
import backbanner from "../../assets/backbanner.jpeg";

const Main = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div className="main-container mb-8">
      <div
        className="text-container bg-cover h-96 flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${backbanner})` }}
      >
        <AnimatePresence>
          {showText && (
            <>
              <motion.h1
                className="text-gray-800 text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                Healthcare for Good
              </motion.h1>
              <motion.h1
                className="text-gray-800 text-5xl font-bold"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Today. Tomorrow. Always
              </motion.h1>
            </>
          )}
        </AnimatePresence>
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
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <FaCalendarAlt className="inline-block mr-2" />
            <div>
              <span className="font-bold text-lg text-center">
                Book an Appointment
              </span>
              <p className="text-sm text-center">
                Book an appointment for your next checkup
              </p>
            </div>
          </motion.button>
          <motion.button
            className="button light-blue hover:opacity-80"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <FaHospital className="inline-block mr-2" />
            <div>
              <span className="font-bold text-lg text-center">Hospitals</span>
              <p className="text-sm text-center">Find hospitals near you</p>
            </div>
          </motion.button>
        </div>
        <div className="button-row">
          <Link to="/diseases">
            <motion.button
              className="button light-purple hover:opacity-80"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              style={{ width: "100%" }} // Adjust width to match other buttons
            >
              <FaMicroscope className="inline-block mr-2" />
              <div>
                <span className="font-bold text-lg text-center">Diseases</span>
                <p className="text-sm text-center">
                  Learn about common diseases
                </p>
              </div>
            </motion.button>
          </Link>
          <motion.button
            className="button light-orange hover:opacity-80"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <FaBook className="inline-block mr-2" />
            <div>
              <span className="font-bold text-lg text-center">
                Recommendations
              </span>
              <p className="text-sm text-center">
                Get health and lifestyle recommendations
              </p>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
