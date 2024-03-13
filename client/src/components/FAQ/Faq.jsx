import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
  });

  const toggleAccordion = (question) => {
    setIsOpen({ ...isOpen, [question]: !isOpen[question] });
  };

  return (
    <div className="max-w-md mx-auto mt-8 mb-8">
      <h2 className="text-4xl font-bold mb-4 text-center">
        Frequently Asked Questions
      </h2>

      {[1, 2, 3, 4, 5].map((number) => (
        <motion.div
          key={number}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: number * 0.1 }}
        >
          <div className="shadow-md rounded-lg overflow-hidden mt-4">
            <motion.div
              className={`w-full flex justify-between items-center px-6 py-3 cursor-pointer select-none bg-gray-200 ${
                isOpen[`question${number}`] ? "bg-gray-300" : ""
              }`}
              onClick={() => toggleAccordion(`question${number}`)}
              whileHover={{ scale: 1.05, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-lg font-semibold">Question {number}</p>
              <motion.svg
                className={`w-6 h-6 ${
                  isOpen[`question${number}`] ? "rotate-180" : ""
                } transform transition-transform`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen[`question${number}`] ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen[`question${number}`]
                      ? "M5 15l7-7 7 7"
                      : "M19 9l-7 7-7-7"
                  }
                ></path>
              </motion.svg>
            </motion.div>
            <motion.div
              initial={false}
              animate={{ height: isOpen[`question${number}`] ? "auto" : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`overflow-hidden`}
            >
              <div className="px-6 py-3 bg-white">
                <p className="text-gray-700">Answer to Question {number}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQ;
