// DoctorProfilePage.jsx
import React from "react";

const DoctorProfilePage = ({ doctor }) => {
  return (
    <div className="doctor-profile-page">
      <img src={doctor.photo} alt={doctor.name} />
      <h2>{doctor.name}</h2>
      <p>Description: {doctor.description}</p>
      <p>Specialization: {doctor.specialization}</p>
      <p>Ratings: {doctor.ratings}</p>
      <p>Location: {doctor.location}</p>
      <h3>Education</h3>
      <p>{doctor.education}</p>
      <h3>Experience</h3>
      <p>{doctor.experience}</p>
      <div className="appointment-card">
        <h3>Book Appointment</h3>
        <p>Price: {doctor.price}</p>
        <p>Available Time Slots:</p>
        <ul>
          {doctor.availableSlots.map((slot, index) => (
            <li key={index}>{slot}</li>
          ))}
        </ul>
        <button>Book Appointment</button>
      </div>
    </div>
  );
};

export default DoctorProfilePage;
