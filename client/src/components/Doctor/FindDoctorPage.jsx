// FindDoctorPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import doctorData from "./DoctorData";
import DoctorCard from "./DoctorCard";
import DoctorDetailsPage from "./DoctorDetailsPage";

const FindDoctorPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const filteredDoctors = doctorData.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDetailsClick = (id) => {
    const doctor = doctorData.find((doctor) => doctor.id === id);
    setSelectedDoctor(doctor);
    console.log("Selected Doctor:", doctor); // Log the selected doctor object
  };

  return (
    <div className="find-doctor-page">
      <div className="bg-yellow-50 py-8 px-4 mb-8">
        <h1 className="text-6xl text-center mb-4 py-12">Find a Doctor</h1>
        <div className="w-full max-w-xl mx-auto flex items-center bg-white rounded-full shadow-xl mb-8">
          <input
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            type="text"
            placeholder="Search by name or specialization"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full">
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-28">
        {filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onDetailsClick={() => handleDetailsClick(doctor.id)}
          />
        ))}
      </div>
      {selectedDoctor && <DoctorDetailsPage doctor={selectedDoctor} />}
    </div>
  );
};

export default FindDoctorPage;
