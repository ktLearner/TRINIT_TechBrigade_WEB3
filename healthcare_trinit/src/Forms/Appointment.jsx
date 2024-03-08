import React, { useState } from "react";

function AppointmentBookingForm() {
  // State variables for form data
  const [selectedState, setSelectedState] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Dummy data for hospitals, departments, doctors, and available timings
  const hospitals = [
    { name: "Hospital 1", state: "State 1" },
    { name: "Hospital 2", state: "State 1" },
    { name: "Hospital 3", state: "State 2" },
    { name: "Hospital 4", state: "State 2" } /* Add more hospitals */,
  ];
  const departments = [
    { name: "Department 1", hospital: "Hospital 1" },
    { name: "Department 2", hospital: "Hospital 1" } /* Add more departments */,
  ];
  const doctors = [
    { name: "Doctor 1", department: "Department 1" },
    { name: "Doctor 2", department: "Department 1" } /* Add more doctors */,
  ];
  const availableTimes = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM" /* Add more timings */,
  ];

  // Event handlers for form selection
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    // Reset selections for subsequent dropdowns
    setSelectedHospital("");
    setSelectedDepartment("");
    setSelectedDoctor("");
  };

  const handleHospitalChange = (e) => {
    setSelectedHospital(e.target.value);
    setSelectedDepartment("");
    setSelectedDoctor("");
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
    setSelectedDoctor("");
  };

  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit appointment booking data
    console.log("Appointment booked:", selectedDate, selectedTime);
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="state">State:</label>
          <select
            id="state"
            onChange={handleStateChange}
            value={selectedState}
            required
          >
            <option value="">Select State</option>
            {[...new Set(hospitals.map((hospital) => hospital.state))].map(
              (state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              )
            )}
          </select>
        </div>
        <div>
          <label htmlFor="hospital">Hospital:</label>
          <select
            id="hospital"
            onChange={handleHospitalChange}
            value={selectedHospital}
            required
          >
            <option value="">Select Hospital</option>
            {hospitals
              .filter((hospital) => hospital.state === selectedState)
              .map((hospital) => (
                <option key={hospital.name} value={hospital.name}>
                  {hospital.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <select
            id="department"
            onChange={handleDepartmentChange}
            value={selectedDepartment}
            required
          >
            <option value="">Select Department</option>
            {departments
              .filter((department) => department.hospital === selectedHospital)
              .map((department) => (
                <option key={department.name} value={department.name}>
                  {department.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label htmlFor="doctor">Doctor:</label>
          <select
            id="doctor"
            onChange={handleDoctorChange}
            value={selectedDoctor}
            required
          >
            <option value="">Select Doctor</option>
            {doctors
              .filter((doctor) => doctor.department === selectedDepartment)
              .map((doctor) => (
                <option key={doctor.name} value={doctor.name}>
                  {doctor.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          {/* Calendar component to select date */}
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <select
            id="time"
            onChange={(e) => handleTimeChange(e.target.value)}
            value={selectedTime}
            required
          >
            <option value="">Select Time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default AppointmentBookingForm;
