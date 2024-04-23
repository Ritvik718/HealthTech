import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import BookingInterface from "../BookingInterface/BookingInterface";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Recommendation.css";

const Recommendations = () => {
  const [userSymptoms, setUserSymptoms] = useState("");
  const [matchedDiseases, setMatchedDiseases] = useState([]);
  const [recommendedTests, setRecommendedTests] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSymptomsChange = (e) => {
    setUserSymptoms(e.target.value);
  };

  const fetchRecommendations = async (symptoms) => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const handleRecommendation = async (e) => {
    e.preventDefault();
    fetchRecommendations(userSymptoms);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="rec flex flex-col items-center justify-center"
    >
      <div className="container mx-auto p-4 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-4 text-center">Symptom Checker</h1>
        <form onSubmit={handleRecommendation} className="w-full max-w-lg">
          <div className="mb-4">
            <label
              htmlFor="symptoms"
              className="block text-gray-700 font-bold mb-2 mt-16"
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
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full"
          >
            Get Recommendation
          </motion.button>
        </form>

        <div className="mt-8 w-full max-w-lg">
          <h2 className="text-xl font-bold mb-2 text-center">
            Matched Diseases:
          </h2>
          <AnimatePresence>
            {loading ? (
              <Skeleton count={5} />
            ) : (
              <div
                className={`grid grid-cols-${
                  matchedDiseases.length > 3 ? "1" : matchedDiseases.length
                } sm:grid-cols-${
                  matchedDiseases.length > 3 ? "2" : matchedDiseases.length
                } lg:grid-cols-${
                  matchedDiseases.length > 3 ? "3" : matchedDiseases.length
                } xl:grid-cols-${
                  matchedDiseases.length > 3 ? "4" : matchedDiseases.length
                } gap-4`}
              >
                {matchedDiseases.map((disease, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg cursor-pointer border border-gray-200"
                  >
                    <h3 className="text-lg font-semibold mb-2">{disease}</h3>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
        <div className="mt-8 w-full max-w-lg">
          <h2 className="text-xl font-bold mb-2 text-center">
            Recommended Tests:
          </h2>
          <AnimatePresence>
            {loading ? (
              <Skeleton count={5} />
            ) : (
              <div
                className={`grid grid-cols-${
                  recommendedTests.length > 3 ? "1" : recommendedTests.length
                } sm:grid-cols-${
                  recommendedTests.length > 3 ? "2" : recommendedTests.length
                } lg:grid-cols-${
                  recommendedTests.length > 3 ? "3" : recommendedTests.length
                } xl:grid-cols-${
                  recommendedTests.length > 3 ? "4" : recommendedTests.length
                } gap-4`}
              >
                {recommendedTests.map((test, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg cursor-pointer border border-gray-200"
                  >
                    <h3 className="text-lg font-semibold mb-2">{test}</h3>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <BookingInterface />
    </motion.div>
  );
};

export default Recommendations;
