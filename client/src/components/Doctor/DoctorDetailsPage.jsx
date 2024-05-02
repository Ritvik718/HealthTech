import React, { useState } from "react";
import { useParams } from "react-router-dom";
import doctorData from "./DoctorData";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DoctorDetailsPage = () => {
  const { id } = useParams();
  const doctor = doctorData.find((doctor) => doctor.id === parseInt(id));

  if (!doctor) {
    return <div className="text-center mt-8">No doctor details available</div>;
  }

  // Default description if not provided in DoctorData
  const description = doctor.description || "No description available";

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookAppointment = () => {
    if (selectedDate && selectedSlot) {
      console.log(
        `Selected Date: ${selectedDate}, Selected Slot: ${selectedSlot}`
      );
      // Add logic to book appointment here
    } else {
      alert("Please select both a date and a time slot.");
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(""); // Reset selected slot when selecting a new date
  };

  const availableSlots = doctor.availableSlots.filter((slot) => {
    const slotDate = new Date(selectedDate);
    const [slotTime, slotPeriod] = slot.split(" ");
    const [hour, minute] = slotTime.split(":");
    slotDate.setHours(parseInt(hour) + (slotPeriod === "PM" ? 12 : 0));
    slotDate.setMinutes(parseInt(minute));
    return slotDate >= new Date();
  });

  return (
    <div className="container mx-auto py-8">
      <div className="md:flex items-start">
        <div className="md:w-1/2 ">
          <div>
            <img className="w-80 h-auto" src={doctor.photo} alt={doctor.name} />
          </div>
          <div className="mt-7 mb-7">
            <p className="text-lg">{doctor.specialization}</p>
            <p className="font-bold text-xl" style={{ color: "#007FFF" }}>
              {doctor.name}
            </p>
          </div>
          <div className="mt-8">
            <h3 className="font-bold text-xl mb-2">About</h3>
            <p>{description}</p>
            <div className="mt-4">
              <h4 className="font-bold text-lg">Education</h4>
              <p>{doctor.education}</p>
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-lg">Experience</h4>
              <p>{doctor.experience}</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 pl-8">
          <div className="rounded-lg overflow-hidden shadow-lg bg-white mb-6">
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold mb-4">Book Appointment</h3>
              <Calendar
                className="w-full"
                onChange={handleDateChange}
                value={selectedDate}
                minDate={new Date()}
                calendarType="US"
                tileClassName={({ date, view }) =>
                  view === "month" &&
                  selectedDate &&
                  date.getDate() === selectedDate.getDate() &&
                  date.getMonth() === selectedDate.getMonth() &&
                  date.getFullYear() === selectedDate.getFullYear()
                    ? "selected-date"
                    : null
                }
              />
              <div className="mt-4">
                <h4 className="font-bold text-lg">Select Time Slot:</h4>
                <select
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                >
                  <option value="">Select a time slot</option>
                  {availableSlots.map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleBookAppointment}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                disabled={!selectedDate || !selectedSlot}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;
