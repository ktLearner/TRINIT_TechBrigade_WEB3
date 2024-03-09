import React from "react"
import Hero from './Hero';
import Navbar from "./components/Navbar/Navbar.jsx"; // Import the Navbar component


const App = () => {
    return (
      <div>
        {/* Navbar */}
        <Navbar />
        <Hero />
      </div>
    );
};

export default App;
