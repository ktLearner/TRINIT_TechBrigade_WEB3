import React, { useState } from 'react';
import HospitalRegn from './Forms/HospitalRegn'; // Import the HospitalRegn component
import PatientRegn from './Forms/PatientRegn'; // Import the PatientRegn component

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
        } else {
            return (
                <div>
                    <h2>Select User Type</h2>
                    <button onClick={() => handleUserSelect('hospital')}>Hospital</button>
                    <button onClick={() => handleUserSelect('patient')}>Patient</button>
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
