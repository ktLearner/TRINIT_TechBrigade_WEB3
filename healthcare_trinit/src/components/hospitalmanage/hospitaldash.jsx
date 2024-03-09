import React from 'react';
import ParticlesComponent from '../../partcles';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

const HospitalDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-4xl font-bold mb-8 text-white">Hospital Dashboard</h1>
      <ParticlesComponent/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/alter-doctors" className="bg-blue-500 text-white py-4 px-6 rounded-full">
          Doctors
        </Link>

        <Link to="/alter-departments" className="bg-blue-500 text-white py-4 px-6 rounded-full">
          Departments
        </Link>

        <Link to="/view-appointments" className="bg-blue-500 text-white py-4 px-6 rounded-full">
          View Appointments
        </Link>
      </div>
    </div>
  );
};

export default HospitalDashboard;
