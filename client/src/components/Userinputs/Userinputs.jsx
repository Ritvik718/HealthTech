import React, { useState } from "react";
import img1 from "../../assets/back.webp";
import { Link } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    symptoms: "",
    name: "",
    image: null,
    prescription: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("age", formData.age);
    data.append("height", formData.height);
    data.append("weight", formData.weight);
    data.append("symptoms", formData.symptoms);
    data.append("name", formData.name);
    data.append("image", formData.image);
    data.append("prescription", formData.prescription);

    try {
      const response = await fetch("http://localhost:3000/api/submit-form", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        // Redirect or display success message
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div style={{ backgroundImage: `url(${img1})`, minHeight: "100vh" }}>
      <div className="flex justify-center items-center">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Fill the form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-gray-700 font-bold mb-2"
              >
                Age
              </label>
              <input
                type="text"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="height"
                className="block text-gray-700 font-bold mb-2"
              >
                Height
              </label>
              <input
                type="text"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="weight"
                className="block text-gray-700 font-bold mb-2"
              >
                Weight
              </label>
              <input
                type="text"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="symptoms"
                className="block text-gray-700 font-bold mb-2"
              >
                Symptoms
              </label>
              <input
                type="text"
                id="symptoms"
                name="symptoms"
                value={formData.symptoms}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-gray-700 font-bold mb-2"
              >
                Medical Reports
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
                className="border-2 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="prescription"
                className="block text-gray-700 font-bold mb-2"
              >
                Prescription
              </label>
              <input
                type="file"
                id="prescription"
                name="prescription"
                onChange={handleChange}
                className="border-2 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            <Link to="/recommendation">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full mt-4"
              >
                Get Recommendation
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
