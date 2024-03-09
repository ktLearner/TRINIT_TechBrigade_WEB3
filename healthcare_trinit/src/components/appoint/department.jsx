// DepartmentSelection.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DepartmentSelection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  // Dummy department data
  const departmentList = [
    'Cardiology',
    'Orthopedics',
    'Pediatrics',
    // Add more departments as needed
  ];

  const filteredDepartments = departmentList.filter((department) =>
    department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">Select Department</h1>
      <input
        type="text"
        placeholder="Search Department"
        className="p-2 border rounded-md w-full mt-4 mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-3 gap-4">
        {filteredDepartments.map((department, index) => (
          <Link
            to={`/physical-appointment/calendar/${encodeURIComponent(department)}`}
            key={index}
            className="p-4 border rounded-md  focus:outline-none"
            onClick={() => setSelectedDepartment(department)}
          >
            {department}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DepartmentSelection;
