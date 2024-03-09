/*import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you are using React Router

const AppointmentDetailsComponent = () => {
  const { appointmentId } = useParams(); // Get the appointmentId from the route params

  // Dummy appointment data for demonstration
  const appointmentDetails = {
    id: appointmentId,
    patientName: 'John Doe',
    doctor: 'Dr. Smith',
    department: 'Cardiology',
    date: '2024-03-10',
    time: '10:00 AM',
    problemDescription: 'Chest pain and shortness of breath',
    allowTracking: true, // Set to false for patients who haven't allowed tracking
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>

      <div className="mb-4">
        <strong>Patient:</strong> {appointmentDetails.patientName}<br />
        <strong>Doctor:</strong> {appointmentDetails.doctor}<br />
        <strong>Department:</strong> {appointmentDetails.department}<br />
        <strong>Date:</strong> {appointmentDetails.date}<br />
        <strong>Time:</strong> {appointmentDetails.time}<br />
        <strong>Problem Description:</strong> {appointmentDetails.problemDescription}
      </div>

      <div className="flex space-x-4">
        <button className="bbg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4">PRESCRIPTION</button>
        
        {appointmentDetails.allowTracking && (
          <button className="bg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4">TRACK PATIENT</button>
        )}
      </div>
    </div>
  );
};

export default AppointmentDetailsComponent;*/

import React from 'react';
import { Link, useParams } from 'react-router-dom';

const AppointmentDetailsComponent = () => {
  const { appointmentId } = useParams();

  // Dummy appointment and patient data
  const appointmentDetails = {
    id: appointmentId,
    patientId: '123', // Replace with actual patient_id associated with the appointment
    patientName: 'John Doe',
    doctor: 'Dr. Smith',
    department: 'Cardiology',
    date: '2024-03-10',
    time: '10:00 AM',
    problemDescription: 'Chest pain and shortness of breath',
    allowTracking: true,
  };

  const patientId = appointmentDetails.patientId;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>

      <div className="mb-4">
        <strong>Patient:</strong> {appointmentDetails.patientName}<br />
        <strong>Doctor:</strong> {appointmentDetails.doctor}<br />
        <strong>Department:</strong> {appointmentDetails.department}<br />
        <strong>Date:</strong> {appointmentDetails.date}<br />
        <strong>Time:</strong> {appointmentDetails.time}<br />
        <strong>Problem Description:</strong> {appointmentDetails.problemDescription}
      </div>

      <div className="flex space-x-4">
        <Link className="bbg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4" to="/prescription">PRESCRIPTION</Link>

        {appointmentDetails.allowTracking && (
          <Link to={`/patient/${patientId}`} className="bg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4">
            TRACK PATIENT
          </Link>
        )}
      </div>
    </div>
  );
};

export default AppointmentDetailsComponent;

