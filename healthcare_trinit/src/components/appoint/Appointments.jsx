// Appointment.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Appointment = () => {
  const { hospitalName } = useParams();

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">{hospitalName}</h1>
      <h2 className="text-lg font-bold mt-4">APPOINTMENT BOOKING</h2>
      <Link className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" to="physical-appointment">Physical Appointment</Link>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 ml-4">Appointment Status</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 ml-4">Print Appointment Slip</button>
    </div>
  );
};

export default Appointment;
