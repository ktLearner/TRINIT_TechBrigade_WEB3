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

import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { AppointmentDetails } from '../../_contract/contract_functions';

const AppointmentDetailsComponent = () => {
  const { id } = useParams();

  const [appointmentDetails, setappointmentDetails] = useState({
    patid: '',
    hosid: '',
    date: '',
    desc: '',
    med: '',
    Diagnosis: '',
    adv: '',
    followup: ''
  });

  useEffect(() => {
    async function getd(){
      let res = await AppointmentDetails(window.ethereum, id);

      setappointmentDetails({
        patid: res[0].toNumber(),
        hosid: res[1].toNumber(),
        date: res[2],
        desc: res[3],
        med: res[4],
        Diagnosis: res[5],
        adv: res[6],
        followup: res[7]
      })
    }

    getd();
  }, []);

  // Dummy appointment and patient data


  const patientId = appointmentDetails.patid;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>

      <div className="mb-4">
        <strong>Patient:</strong> {appointmentDetails.patid}<br />
        <strong>Doctor:</strong> {appointmentDetails.hosid}<br />
        <strong>Date:</strong> {appointmentDetails.date}<br />
        <strong>Problem Description:</strong> {appointmentDetails.desc}<br />
        <strong>Madicine:</strong> {appointmentDetails.med}<br />
        <strong>Diagnosis:</strong> {appointmentDetails.Diagnosis}<br />
        <strong>Advice:</strong> {appointmentDetails.adv}<br />
        <strong>Follow Up date:</strong> {appointmentDetails.followup}
      </div>

      <div className="flex space-x-4">
        <Link className="bbg-[#00FFFF] text-black py-2 px-9 rounded-full mr-4" to={`/prescription/${id}`}>PRESCRIPTION</Link>
      </div>
    </div>
  );
};

export default AppointmentDetailsComponent;

