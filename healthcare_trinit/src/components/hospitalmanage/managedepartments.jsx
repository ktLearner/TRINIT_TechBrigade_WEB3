import React, { useState } from 'react';

const AlterDepartmentsComponent = () => {
  const [newDepartment, setNewDepartment] = useState('');
  const [departments, setDepartments] = useState(['Cardiology', 'Orthopedics']); // Sample data, replace with actual data
  const [searchTerm, setSearchTerm] = useState('');

  const handleDepartmentChange = (e) => {
    setNewDepartment(e.target.value);
  };

  const handleAlterDepartment = () => {
    // Add logic to update department names using 'newDepartment'
    setDepartments([...departments, newDepartment]);
    setNewDepartment('');
  };

  const handleDeleteDepartment = (department) => {
    // Add logic to delete a department
    const updatedDepartments = departments.filter((d) => d !== department);
    setDepartments(updatedDepartments);
  };

  return (
    <div className="p-4">
      <label className="block mb-2 text-gray-600">New Department Name:</label>
      <input
        type="text"
        value={newDepartment}
        onChange={handleDepartmentChange}
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={handleAlterDepartment}
        className="bg-green-500 text-white p-2 rounded hover:bg-green-700"
      >
        Add Department
      </button>

      <label className="block mt-4 mb-2 text-gray-600">Search Department:</label>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />

      <ul className="list-disc pl-4">
        {departments
          .filter((department) =>
            department.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((department, index) => (
            <li key={index} className="mb-2">
              {department}
              <button
                onClick={() => handleDeleteDepartment(department)}
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

export default AlterDepartmentsComponent;
