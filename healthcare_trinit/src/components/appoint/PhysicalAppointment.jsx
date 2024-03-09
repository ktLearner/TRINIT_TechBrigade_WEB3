// PhysicalAppointment.js
import React from 'react';
import { Link } from 'react-router-dom';

const PhysicalAppointment = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">Physical Appointment</h1>
      <Link to="/physical-appointment/departments" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
        Select Department
      </Link>
    </div>
  );
};

export default PhysicalAppointment;
