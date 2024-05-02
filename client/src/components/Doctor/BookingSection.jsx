import React from "react";

const BookingSection = ({
  doctor,
  selectedDate,
  selectedSlot,
  onDateSelect,
  onSlotSelect,
  onBookAppointment,
}) => {
  // Dummy data for available time slots
  const availableSlots = ["9:00 AM", "11:00 AM", "2:00 PM"];

  return (
    <div className="booking-section">
      <h3>Book Appointment</h3>
      <div>
        <p>Select Date:</p>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => onDateSelect(e.target.value)}
        />
      </div>
      <div>
        <p>Select Time Slot:</p>
        <select
          value={selectedSlot}
          onChange={(e) => onSlotSelect(e.target.value)}
        >
          <option value="">Select a time slot</option>
          {availableSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>
      <button onClick={onBookAppointment}>Book Appointment</button>
    </div>
  );
};

export default BookingSection;
