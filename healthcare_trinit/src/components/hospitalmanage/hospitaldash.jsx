import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

const HospitalDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-black">Hospital Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/alter-doctors" className="bg-blue-500 text-white py-4 px-6 rounded-full">
          Alter Doctors
        </Link>

        <Link to="/alter-departments" className="bg-blue-500 text-white py-4 px-6 rounded-full">
          Alter Departments
        </Link>

        <Link to="/view-appointments" className="bg-blue-500 text-white py-4 px-6 rounded-full">
          View Appointments
        </Link>
      </div>
    </div>
  );
};

export default HospitalDashboard;
