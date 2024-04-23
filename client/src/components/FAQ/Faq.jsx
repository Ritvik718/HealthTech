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

  // Array containing questions and answers
  const faqData = [
    {
      question:
        "How does the system leverage the OpenAI API to check for diseases?",
      answer:
        "The system harnesses the power of the OpenAI API by sending user-provided health data, such as symptoms, medical history, and demographics, to OpenAI's machine learning models. These models are trained on vast amounts of medical data to recognize patterns and associations between symptoms and diseases. Upon receiving the input data, the API processes it through these models, generating likely disease diagnoses along with corresponding confidence levels. By tapping into OpenAI's advanced natural language processing capabilities, the system can interpret unstructured textual data and extract relevant information to aid in disease identification.",
    },
    {
      question:
        "What types of input does the system accept for disease checking?",
      answer:
        "The system is designed to be flexible in accepting various forms of input to facilitate disease checking. Users can input their symptoms using natural language descriptions, select from predefined symptom lists, upload medical documents or test results, or even provide demographic information. This versatility allows individuals to communicate their health concerns in a manner that suits their preferences and capabilities. Additionally, the system may integrate with wearable devices or health tracking applications to gather real-time data, further enhancing its ability to assess and monitor health status.",
    },
    {
      question:
        "How does the system determine which tests to recommend based on the diagnosed diseases?",
      answer:
        "Upon identifying potential diseases through the OpenAI API, the system consults a comprehensive database of medical guidelines, protocols, and best practices to formulate appropriate test recommendations. These recommendations are tailored to each specific disease and take into account factors such as disease severity, stage, comorbidities, and patient preferences. The system may prioritize tests that are essential for confirming or ruling out the diagnosed conditions, as well as screenings for associated complications or related health issues. Additionally, it considers the availability and accessibility of diagnostic facilities to ensure practicality and feasibility.",
    },
    {
      question:
        "How accurate are the disease diagnoses and test recommendations provided by the system?",
      answer:
        "The accuracy of the system's disease diagnoses and test recommendations depends on several factors, including the quality and completeness of the input data, the performance of the underlying machine learning models, and the reliability of the medical knowledge sources used. While the OpenAI API leverages state-of-the-art AI technologies to generate probabilistic disease predictions, it is essential to recognize that no diagnostic system is infallible. Therefore, the system aims to provide probabilistic assessments rather than definitive diagnoses and encourages users to seek professional medical advice for confirmation and further evaluation.",
    },
    {
      question:
        "Is user data securely handled when interacting with the system and the OpenAI API?",
      answer:
        "Maintaining the privacy and security of user data is paramount for the system. It employs robust encryption protocols to safeguard data transmission and storage, ensuring that sensitive health information remains confidential. Access controls and authentication mechanisms are implemented to restrict unauthorized access to user data, and regular security audits are conducted to identify and mitigate potential vulnerabilities. Additionally, the system adheres to industry standards and regulatory requirements for data protection, such as HIPAA in the United States or GDPR in the European Union, to uphold user privacy rights and ensure compliance with legal obligations. By prioritizing data security and privacy, the system fosters trust and confidence among users, encouraging them to engage proactively in managing their health.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-8 mb-16">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Frequently Asked Questions
      </h2>

      {faqData.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.div
            className="border rounded-md overflow-hidden mt-4"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => toggleAccordion(`question${index + 1}`)}
          >
            <div
              className={`flex justify-between items-center px-8 py-4 cursor-pointer select-none ${
                isOpen[`question${index + 1}`] ? "bg-gray-200" : "bg-gray-100"
              }`}
              style={{
                background: `linear-gradient(to bottom left, #4CCED5 40%, #B8E8EC 80%)`,
              }}
            >
              <p className="text-lg font-semibold m-0">{faq.question}</p>
              <motion.span
                className="transform"
                animate={{
                  rotate: isOpen[`question${index + 1}`] ? 0 : 90,
                }}
                transition={{ duration: 0.3 }}
              >
                {isOpen[`question${index + 1}`] ? "-" : "+"}
              </motion.span>
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isOpen[`question${index + 1}`] ? "auto" : 0,
                opacity: isOpen[`question${index + 1}`] ? 1 : 0,
                marginTop: isOpen[`question${index + 1}`] ? "8px" : 0,
                marginBottom: isOpen[`question${index + 1}`] ? "8px" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden  px-8"
            >
              <p className="text-gray-700 m-0">{faq.answer}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQ;
