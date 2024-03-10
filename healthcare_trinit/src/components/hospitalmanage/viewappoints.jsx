import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetHosId, GetPatientId, UserAppointments } from '../../_contract/contract_functions';

const ViewAppointmentsComponent = () => {
  const [id, setId] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function getid() {
      let iid = await GetPatientId(window.ethereum);
      let res = await UserAppointments(window.ethereum, iid);
      console.log("errror", res);
      setAppointments(res);
      setId(iid);
      console.log("skjdnvkj", iid);
    }
    getid();
  }, []);



  const [selectedDepartment, setSelectedDepartment] = useState('');

  const sortAppointmentsByDate = () => {
    const sortedAppointments = [...appointments].sort((a, b) =>
      a.date.localeCompare(b.date)
    );
    setAppointments(sortedAppointments);
  };

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
        {appointments && appointments.map((appointment) => (
          <li key={appointment.toNumber()} className="mb-4">
            <Link to={`/appointment-details/${appointment.toNumber()}`} className="btn-blue">
              View Appointment {appointment.toNumber()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewAppointmentsComponent;
