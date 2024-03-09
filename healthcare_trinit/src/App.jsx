import React, { useState } from 'react';
import HospitalRegn from './Forms/HospitalRegn'; // Import the HospitalRegn component
import PatientRegn from './Forms/PatientRegn'; // Import the PatientRegn component
import AppointmentBook from './Forms/Appointment'; // Import the AppointmentBookingForm component
import UploadForm from "./Forms/UploadForm";
import Home from './Forms/connect_wallet';

const App = () => {
    const [userType, setUserType] = useState(null); // State to track user selection

    // Function to handle user selection
    const handleUserSelect = (type) => {
        setUserType(type);
    };

    // Render content based on user selection
    const renderContent = () => {
        if (userType === 'hospital') {
            return <HospitalRegn />;
        } else if (userType === 'patient') {
            return <PatientRegn />;
        } else if (userType === 'appointment') {
            return <AppointmentBook />;
        } else {
            return (
              <div>
                <Home />
                <UploadForm />
                <h2>Select User Type</h2>
                <button onClick={() => handleUserSelect("hospital")}>
                  Hospital
                </button>
                <button onClick={() => handleUserSelect("patient")}>
                  Patient
                </button>
                <button onClick={() => handleUserSelect("appointment")}>
                  Book Appointment
                </button>{" "}
                {/* New option */}
              </div>
            );
        }
    };

    return (
        <div>
            <h1>My React App</h1>
            {renderContent()} {/* Render content based on user selection */}
        </div>
    );
};

export default App;
