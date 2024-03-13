import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import BookingInterface from "../BookingInterface/BookingInterface";
import "./Recommendation.css";

const Recommendations = () => {
  const [userSymptoms, setUserSymptoms] = useState("");
  const [matchedDiseases, setMatchedDiseases] = useState([]);
  const [recommendedTests, setRecommendedTests] = useState([]);
  const [error, setError] = useState("");

  const handleSymptomsChange = (e) => {
    setUserSymptoms(e.target.value);
  };

  const fetchRecommendations = async (symptoms) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/recommendation",
        { symptoms }
      );
      const { data } = response;

      if (!data || !data.matchedDiseases || !data.recommendedTests) {
        throw new Error("Invalid response from server");
      }

      const { matchedDiseases, recommendedTests } = data;

      setMatchedDiseases(matchedDiseases);
      setRecommendedTests(recommendedTests);
      setError("");
    } catch (error) {
      console.error("Error getting recommendation:", error);
      setError("An error occurred while fetching recommendations.");
    }
  };

  const handleRecommendation = async (e) => {
    e.preventDefault();
    fetchRecommendations(userSymptoms);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="rec"
      >
        <div className="container mx-auto p-4">
          <h1 className="text-6xl font-bold mb-4 text-center">
            Symptom Checker
          </h1>
          <form onSubmit={handleRecommendation}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <label
                htmlFor="symptoms"
                className="block text-gray-700 font-bold mb-2"
              >
                Enter your symptoms (separated by commas):
              </label>
              <input
                type="text"
                id="symptoms"
                value={userSymptoms}
                onChange={handleSymptomsChange}
                className="border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
                placeholder="e.g., fever, cough, sore throat"
              />
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            >
              Get Recommendation
            </motion.button>
          </form>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-2">Matched Diseases:</h2>
            <AnimatePresence>
              {matchedDiseases.map((disease, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {disease}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-2">Recommended Tests:</h2>
            <AnimatePresence>
              {recommendedTests.map((test, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {test}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <BookingInterface />
      </motion.div>
    </>
  );
};

export default Recommendations;
