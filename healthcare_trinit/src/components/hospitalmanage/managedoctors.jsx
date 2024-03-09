import React, { useState } from 'react';

const AlterDoctorsComponent = () => {
  const [newName, setNewName] = useState('');
  const [doctors, setDoctors] = useState(['Dr. John Doe', 'Dr. Jane Smith']); // Sample data, replace with actual data
  const [searchTerm, setSearchTerm] = useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleAlterName = () => {
    // Add logic to update doctor names using 'newName'
    setDoctors([...doctors, newName]);
    setNewName('');
  };

  const handleDeleteDoctor = (doctor) => {
    // Add logic to delete a doctor
    const updatedDoctors = doctors.filter((d) => d !== doctor);
    setDoctors(updatedDoctors);
  };

  return (
    <div className="p-4">
      <label className="block mb-2 text-gray-600">New Doctor Name:</label>
      <input
        type="text"
        value={newName}
        onChange={handleNameChange}
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={handleAlterName}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Add Doctor
      </button>

      <label className="block mt-4 mb-2 text-gray-600">Search Doctor:</label>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />

      <ul className="list-disc pl-4">
        {doctors
          .filter((doctor) =>
            doctor.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((doctor, index) => (
            <li key={index} className="mb-2">
              {doctor}
              <button
                onClick={() => handleDeleteDoctor(doctor)}
                className="ml-2 text-red-600"
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AlterDoctorsComponent;
