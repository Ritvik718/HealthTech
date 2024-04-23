import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeartbeat,
  FaLungs,
  FaBrain,
  FaStethoscope,
  FaDna,
  FaShieldAlt,
  FaDisease,
} from "react-icons/fa";

const Diseases = () => {
  const [expandedDiseaseIndices, setExpandedDiseaseIndices] = useState({
    cardiovascular: null,
    respiratory: null,
  });

  const diseaseCategories = [
    {
      name: "Cardiovascular Diseases",
      icon: <FaHeartbeat className="text-red-500 text-4xl" />,
      summary:
        "Cardiovascular diseases are a group of disorders of the heart and blood vessels, and they include coronary artery disease, heart failure, rheumatic heart disease, and more.",
      diseases: [
        {
          name: "Coronary Heart Disease",
          details:
            "Coronary heart disease (CHD) is the most common type of heart disease. It occurs when the blood vessels that supply blood to the heart become narrowed or blocked by a buildup of plaque.",
        },
        {
          name: "Cerebrovascular Disease",
          details:
            "Cerebrovascular disease refers to a group of conditions that affect the blood vessels supplying blood to the brain. It includes stroke, transient ischemic attack (TIA), and subarachnoid hemorrhage.",
        },
        {
          name: "Peripheral Artery Disease",
          details:
            "Peripheral artery disease (PAD) occurs when there is a narrowing of the blood vessels outside of the heart, usually due to atherosclerosis. It commonly affects the legs.",
        },
        {
          name: "Rheumatic Heart Disease",
          details:
            "Rheumatic heart disease (RHD) is a condition in which the heart valves are damaged by rheumatic fever, a bacterial infection that can result from streptococcal infections.",
        },
        {
          name: "Heart Failure",
          details:
            "Heart failure occurs when the heart is unable to pump enough blood to meet the body's needs. It can result from conditions such as coronary artery disease, hypertension, and cardiomyopathy.",
        },
      ],
    },
    {
      name: "Respiratory Diseases",
      icon: <FaLungs className="text-blue-500 text-4xl" />,
      summary:
        "Respiratory diseases affect the lungs and other parts of the respiratory system. They include asthma, chronic obstructive pulmonary disease (COPD), pneumonia, and more.",
      diseases: [
        {
          name: "Asthma",
          details:
            "Asthma is a chronic respiratory condition characterized by inflammation and narrowing of the airways, leading to difficulty breathing, wheezing, coughing, and chest tightness.",
        },
        {
          name: "Chronic Obstructive Pulmonary Disease (COPD)",
          details:
            "COPD is a group of progressive lung diseases that make it difficult to breathe. It includes chronic bronchitis and emphysema, and it is often caused by long-term exposure to irritants such as cigarette smoke.",
        },
        {
          name: "Pneumonia",
          details:
            "Pneumonia is an infection that inflames the air sacs in one or both lungs. It can be caused by bacteria, viruses, or fungi, and it often leads to symptoms such as cough, fever, and difficulty breathing.",
        },
        {
          name: "Influenza (Flu)",
          details:
            "Influenza, commonly known as the flu, is a viral infection that affects the respiratory system. It is characterized by symptoms such as fever, chills, cough, sore throat, runny or stuffy nose, muscle or body aches, fatigue, and headache.",
        },
        {
          name: "Tuberculosis (TB)",
          details:
            "Tuberculosis is a bacterial infection that primarily affects the lungs but can also affect other parts of the body. It is spread through the air when an infected person coughs or sneezes, and it can lead to symptoms such as cough, weight loss, fatigue, fever, and night sweats.",
        },
      ],
    },
    {
      name: "Neurological Disorders",
      icon: <FaBrain className="text-purple-500 text-4xl" />,
      summary:
        "Neurological disorders affect the brain, spinal cord, and nerves throughout the body. They include epilepsy, Parkinson's disease, Alzheimer's disease, multiple sclerosis, and migraines.",
      diseases: [
        {
          name: "Epilepsy",
          details:
            "Epilepsy is a neurological disorder characterized by recurrent seizures. These seizures are brief episodes of involuntary movement that may involve a part of the body or the entire body.",
        },
        {
          name: "Parkinson's Disease",
          details:
            "Parkinson's disease is a progressive nervous system disorder that affects movement. Symptoms start gradually, sometimes starting with a barely noticeable tremor in just one hand.",
        },
        {
          name: "Alzheimer's Disease",
          details:
            "Alzheimer's disease is a progressive disorder that causes brain cells to waste away (degenerate) and die. Alzheimer's disease is the most common cause of dementia — a continuous decline in thinking, behavioral and social skills that disrupts a person's ability to function independently.",
        },
        {
          name: "Multiple Sclerosis (MS)",
          details:
            "Multiple sclerosis (MS) is a potentially disabling disease of the brain and spinal cord (central nervous system). In MS, the immune system attacks the protective sheath (myelin) that covers nerve fibers and causes communication problems between your brain and the rest of your body.",
        },
        {
          name: "Migraine",
          details:
            "A migraine can cause severe throbbing pain or a pulsing sensation, usually on one side of the head. It's often accompanied by nausea, vomiting, and extreme sensitivity to light and sound.",
        },
      ],
    },
    {
      name: "Gastrointestinal Disorders",
      icon: <FaStethoscope className="text-green-500 text-4xl" />,
      summary:
        "Gastrointestinal disorders affect the digestive system and its associated organs. They include irritable bowel syndrome, gastroesophageal reflux disease (GERD), Crohn's disease, ulcerative colitis, and gastritis.",
      diseases: [
        {
          name: "Irritable Bowel Syndrome (IBS)",
          details:
            "Irritable bowel syndrome (IBS) is a common disorder that affects the large intestine. Signs and symptoms include cramping, abdominal pain, bloating, gas, and diarrhea or constipation, or both.",
        },
        {
          name: "Gastroesophageal Reflux Disease (GERD)",
          details:
            "Gastroesophageal reflux disease (GERD) is a chronic condition in which the stomach's contents flow backward, up into the esophagus. This acid reflux irritates the lining of your esophagus.",
        },
        {
          name: "Crohn's Disease",
          details:
            "Crohn's disease is an inflammatory bowel disease (IBD). It causes inflammation of your digestive tract, which can lead to abdominal pain, severe diarrhea, fatigue, weight loss, and malnutrition.",
        },
        {
          name: "Ulcerative Colitis",
          details:
            "Ulcerative colitis is an inflammatory bowel disease that causes long-lasting inflammation and ulcers (sores) in your digestive tract. Ulcerative colitis affects the innermost lining of your large intestine (colon) and rectum.",
        },
        {
          name: "Gastritis",
          details:
            "Gastritis is an inflammation, irritation, or erosion of the lining of the stomach. It can occur suddenly (acute) or gradually (chronic).",
        },
      ],
    },
    {
      name: "Endocrine Disorders",
      icon: <FaDna className="text-orange-500 text-4xl" />,
      summary:
        "Endocrine disorders affect the endocrine system, which consists of glands that produce hormones. They include diabetes mellitus, thyroid disorders, Cushing's syndrome, Addison's disease, and hyperthyroidism.",
      diseases: [
        {
          name: "Diabetes Mellitus",
          details:
            "Diabetes mellitus refers to a group of diseases that affect how your body uses blood sugar (glucose). Glucose is vital to your health because it's an important source of energy for the cells that make up your muscles and tissues.",
        },
        {
          name: "Thyroid Disorders",
          details:
            "Thyroid disorders are conditions that affect the thyroid gland, a butterfly-shaped gland in the front of the neck. The thyroid has important roles to regulate numerous metabolic processes throughout the body.",
        },
        {
          name: "Cushing's Syndrome",
          details:
            "Cushing's syndrome is a hormonal disorder caused by prolonged exposure of the body's tissues to high levels of the hormone cortisol. It can occur when your body makes too much cortisol or takes certain medications that mimic cortisol.",
        },
        {
          name: "Addison's Disease",
          details:
            "Addison's disease is a disorder that occurs when your body produces insufficient amounts of certain hormones produced by your adrenal glands. In Addison's disease, your adrenal glands produce too little cortisol and often insufficient levels of aldosterone as well.",
        },
        {
          name: "Hyperthyroidism",
          details:
            "Hyperthyroidism (overactive thyroid) occurs when your thyroid gland produces too much of the hormone thyroxine. Hyperthyroidism can accelerate your body's metabolism, causing unintentional weight loss and a rapid or irregular heartbeat.",
        },
      ],
    },
    {
      name: "Genetic Disorders",
      icon: <FaShieldAlt className="text-yellow-500 text-4xl" />,
      summary:
        "Genetic disorders are conditions caused by changes in DNA. They include Down syndrome, cystic fibrosis, hemophilia, sickle cell disease, and Tay-Sachs disease.",
      diseases: [
        {
          name: "Down Syndrome",
          details:
            "Down syndrome is a genetic disorder caused when abnormal cell division results in extra genetic material from chromosome 21. This genetic disorder, which varies in severity, causes lifelong intellectual disability and developmental delays, and in some people, health problems.",
        },
        {
          name: "Cystic Fibrosis",
          details:
            "Cystic fibrosis is a progressive, genetic disease that causes persistent lung infections and limits the ability to breathe over time. It affects the cells that produce mucus, sweat, and digestive juices.",
        },
        {
          name: "Hemophilia",
          details:
            "Hemophilia is a rare disorder in which your blood doesn't clot normally because it lacks sufficient blood-clotting proteins (clotting factors). If you have hemophilia, you may bleed for a longer time after an injury than you would if your blood clotted normally.",
        },
        {
          name: "Sickle Cell Disease",
          details:
            "Sickle cell disease is an inherited red blood cell disorder in which there aren't enough healthy red blood cells to carry oxygen throughout your body. It can cause pain, anemia, and organ damage.",
        },
        {
          name: "Tay-Sachs Disease",
          details:
            "Tay-Sachs disease is a rare, inherited disorder that destroys nerve cells in the brain and spinal cord (central nervous system). The most common form of Tay-Sachs disease becomes apparent in infancy.",
        },
      ],
    },
    {
      name: "Autoimmune Disorders",
      icon: <FaDisease className="text-red-500 text-4xl" />,
      summary:
        "Autoimmune disorders occur when the immune system mistakenly attacks the body's own tissues. They include rheumatoid arthritis, systemic lupus erythematosus (SLE), multiple sclerosis (MS), type 1 diabetes, and psoriasis.",
      diseases: [
        {
          name: "Rheumatoid Arthritis",
          details:
            "Rheumatoid arthritis is a chronic inflammatory disorder that can affect more than just your joints. In some people, the condition can damage a wide variety of body systems, including the skin, eyes, lungs, heart, and blood vessels.",
        },
        {
          name: "Systemic Lupus Erythematosus (SLE)",
          details:
            "Systemic lupus erythematosus (SLE) is a chronic autoimmune disease that can affect various parts of the body, including the skin, joints, kidneys, heart, lungs, brain, and blood cells. In lupus, the immune system attacks healthy cells and tissues by mistake.",
        },
        {
          name: "Multiple Sclerosis (MS)",
          details:
            "Multiple sclerosis (MS) is a potentially disabling disease of the brain and spinal cord (central nervous system). In MS, the immune system attacks the protective sheath (myelin) that covers nerve fibers and causes communication problems between your brain and the rest of your body.",
        },
        {
          name: "Type 1 Diabetes",
          details:
            "Type 1 diabetes, once known as juvenile diabetes or insulin-dependent diabetes, is a chronic condition in which the pancreas produces little or no insulin, a hormone needed to allow sugar (glucose) to enter cells to produce energy.",
        },
        {
          name: "Psoriasis",
          details:
            "Psoriasis is a chronic autoimmune condition that causes the rapid buildup of skin cells. This buildup of cells causes scaling on the skin's surface.",
        },
      ],
    },
  ];

  const handleExpand = (categoryIndex, diseaseIndex) => {
    setExpandedDiseaseIndices((prevIndices) => ({
      ...prevIndices,
      [categoryIndex]:
        prevIndices[categoryIndex] === diseaseIndex ? null : diseaseIndex,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Common Diseases</h1>

      {diseaseCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 flex items-center cursor-pointer"
          >
            {category.icon}
            <div className="ml-4">
              <h2 className="text-xl font-bold">{category.name}</h2>
              <p className="text-gray-700">{category.summary}</p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {category.diseases.map((disease, diseaseIndex) => (
              <AnimatePresence key={diseaseIndex}>
                <motion.div
                  className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
                  layout
                  key={diseaseIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => handleExpand(categoryIndex, diseaseIndex)}
                  style={{
                    gridColumn:
                      expandedDiseaseIndices[categoryIndex] === diseaseIndex
                        ? "span 2"
                        : "auto",
                  }}
                >
                  <h3 className="text-lg font-bold">{disease.name}</h3>
                  {expandedDiseaseIndices[categoryIndex] === diseaseIndex && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-gray-700">{disease.details}</p>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Diseases;
