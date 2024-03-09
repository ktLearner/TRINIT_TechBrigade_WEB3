import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ViewAppointmentsComponent = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: 'John Doe',
      doctor: 'Dr. Smith',
      department: 'Cardiology',
      date: '2024-03-10',
      time: '10:00 AM',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      doctor: 'Dr. Johnson',
      department: 'Orthopedics',
      date: '2024-03-12',
      time: '02:30 PM',
    },
    // Add more dummy appointments as needed
  ]);

  const [selectedDepartment, setSelectedDepartment] = useState('');

  // Function to sort appointments by date
  const sortAppointmentsByDate = () => {
    const sortedAppointments = [...appointments].sort((a, b) =>
      a.date.localeCompare(b.date)
    );
    setAppointments(sortedAppointments);
  };

  // Function to filter appointments by department
  const filterAppointmentsByDepartment = () => {
    const filteredAppointments = selectedDepartment
      ? appointments.filter(
          (appointment) => appointment.department === selectedDepartment
        )
      : appointments;
    setAppointments(filteredAppointments);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Appointments</h2>

      <button
        onClick={sortAppointmentsByDate}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 mb-4"
      >
        Sort by Date
      </button>

      <div className="mb-4">
        <label className="block text-gray-600">Filter by Department:</label>
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">All Departments</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Orthopedics">Orthopedics</option>
          {/* Add more departments as needed */}
        </select>
      </div>

      <button
        onClick={filterAppointmentsByDepartment}
        className="bg-green-500 text-white p-2 rounded hover:bg-green-700 mb-4"
      >
        Apply Filter
      </button>

      <ul className="list-disc pl-4">
        {appointments.map((appointment) => (
          <li key={appointment.id} className="mb-4">
            <strong>Patient:</strong> {appointment.patientName}<br />
            <strong>Doctor:</strong> {appointment.doctor}<br />
            <strong>Department:</strong> {appointment.department}<br />
            <strong>Date:</strong> {appointment.date}<br />
            <strong>Time:</strong> {appointment.time}<br />
            <Link to={`/appointment-details/${appointment.id}`} className="btn-blue">
              View
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewAppointmentsComponent;