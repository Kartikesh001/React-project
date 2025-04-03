import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Doctor data
const doctors = [
  {
    id: 1,
    name: "Dr. Ashmita Singh",
    specialty: "Cardiologist",
    experience: "20 years",
    email: "ashmita.singh@example.com",
    image: "/Doctor1.png",
    hospital: "Apollo Hospital, New Delhi",
    rating: 4.8,
    fee: "Rs1000 per consultation",
    slots: {
      "2025-04-05": ["10:00 AM", "2:00 PM", "4:00 PM"],
      "2025-04-06": ["9:00 AM", "1:00 PM", "3:00 PM"],
    },
  },
  {
    id: 2,
    name: "Dr. Rohit Sharma",
    specialty: "Endocrinologist",
    experience: "18 years",
    email: "rohit.sharma@example.com",
    image: "/doctor2.jpg",
    hospital: "Fortis Hospital, Mumbai",
    rating: 4.6,
    fee: "Rs100 per consultation",
    slots: {
      "2025-04-07": ["11:00 AM", "3:00 PM", "5:00 PM"],
    },
  },
];

// Main component
function DoctorList() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    setSelectedDate(null);
    setAvailableSlots([]);
  };

  const handleDateChange = (date) => {


    
    setSelectedDate(date);
    const formattedDate = date.toISOString().split("T")[0];
    setAvailableSlots(selectedDoctor?.slots[formattedDate] || []);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-800 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Find Your Specialist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white text-black p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => handleDoctorClick(doctor)}
          >
            <img src={doctor.image} className="w-32 h-32 rounded-full mx-auto mb-4" alt="Doctor" />
            <h2 className="text-2xl font-semibold text-center">{doctor.name}</h2>
            <p className="text-center text-gray-600">{doctor.specialty}</p>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <div className="mt-8 p-6 bg-white text-black rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold">{selectedDoctor.name}</h2>
          <p className="text-lg text-gray-700">{selectedDoctor.specialty}</p>
          <p className="text-md text-gray-500">{selectedDoctor.experience} Experience</p>
          <p className="text-md text-gray-700">Email: {selectedDoctor.email}</p>
          <p className="text-md text-gray-700">Hospital: {selectedDoctor.hospital}</p>
          <p className="text-md text-gray-700">Consultation Fee: {selectedDoctor.fee}</p>
          <p className="mt-2 text-yellow-500 font-bold">⭐ {selectedDoctor.rating}/5</p>
          
          {/* Calendar Component */}
          <div className="mt-4">
            <Calendar onChange={handleDateChange} value={selectedDate} />
          </div>

          {selectedDate && (
            <div className="mt-4">
              <h3 className="font-semibold">Available Slots:</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {availableSlots.length > 0 ? (
                  availableSlots.map((slot, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      {slot}
                    </button>
                  ))
                ) : (
                  <p className="text-gray-500">No slots available for this date</p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DoctorList;