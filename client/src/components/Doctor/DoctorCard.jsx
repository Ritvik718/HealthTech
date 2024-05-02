// DoctorCard.jsx

import React from "react";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="max-w-xs sm:max-w-md rounded-lg overflow-hidden shadow-lg bg-white mb-6">
      <div className="relative h-60">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover object-center rounded-t-lg"
          src={doctor.photo}
          alt={doctor.name}
        />
      </div>
      <div className="px-4 py-2">
        <div className="font-bold text-xl mb-2">{doctor.name}</div>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-semibold">Specialization:</span>{" "}
          {doctor.specialization}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-semibold">Ratings:</span> {doctor.ratings}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-semibold">Location:</span> {doctor.location}
        </p>
      </div>
      <div className="px-4 py-2 mb-4">
        <Link
          to={`/doctor/${doctor.id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
